
import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '../public/images');

if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
}

const targets = [
    {
        name: 'dest_ella.jpg',
        pageUrl: 'https://commons.wikimedia.org/wiki/File:Nine_Arches_Bridge_in_Ella.jpg'
    },
    {
        name: 'dest_mirissa.jpg',
        pageUrl: 'https://commons.wikimedia.org/wiki/File:Mirissa_Beach_Sri_Lanka.jpg'
    },
    {
        name: 'dest_sigiriya.jpg',
        pageUrl: 'https://commons.wikimedia.org/wiki/File:Sigiriya_rock_fortress.jpg'
    },
    {
        name: 'pkg_essential.jpg', // Tea plantation
        pageUrl: 'https://commons.wikimedia.org/wiki/File:Tea_Plantation_of_Sri_Lanka.jpg'
    },
    {
        name: 'dest_yala.jpg', // Leopard
        pageUrl: 'https://commons.wikimedia.org/wiki/File:Leopard_in_Yala_National_Park.jpg'
    },
    {
        name: 'hero_bg.jpg', // Scenic train
        pageUrl: 'https://commons.wikimedia.org/wiki/File:Sri_Lanka_Train.jpg'
    }
];

// Helper to fetch text content
const fetchText = (url) => new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36' } }, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => resolve(data));
        res.on('error', reject);
    });
});

// Helper to download binary
const downloadFile = (url, dest) => new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36' } }, (res) => {
        if (res.statusCode === 302 || res.statusCode === 301) {
            downloadFile(res.headers.location, dest).then(resolve).catch(reject);
            return;
        }
        res.pipe(file);
        file.on('finish', () => {
            file.close();
            resolve();
        });
    }).on('error', (err) => {
        fs.unlink(dest, () => { });
        reject(err);
    });
});

async function run() {
    console.log('Starting image downloads...');

    for (const target of targets) {
        try {
            let imageUrl = target.directUrl;

            if (!imageUrl && target.pageUrl) {
                console.log(`Fetching page for ${target.name}...`);
                const html = await fetchText(target.pageUrl);

                // Look for the "Original file" link or the main image display
                // The full resolution link usually text "Original file"
                // Or inside <div class="fullMedia"><a href="..."

                // Try matching the fullMedia div pattern first
                let match = html.match(/class="fullMedia"><a href="([^"]+)"/);

                if (!match) {
                    // Fallback: look for any upload.wikimedia link ending in jpg
                    match = html.match(/"(https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/[^"]+\.jpg)"/);
                }

                if (match) {
                    imageUrl = match[1];
                    if (imageUrl.startsWith('//')) {
                        imageUrl = 'https:' + imageUrl;
                    }
                } else {
                    console.error(`Could not find image URL for ${target.name}`);
                    // console.log('Partial HTML:', html.substring(0, 1000)); // Debug if needed
                    continue;
                }
            }

            if (imageUrl) {
                console.log(`Downloading ${target.name} from ${imageUrl}...`);
                await downloadFile(imageUrl, path.join(publicDir, target.name));
                console.log(`Saved ${target.name}`);
            }
        } catch (e) {
            console.error(`Error processing ${target.name}:`, e.message);
        }
    }
    console.log('Done.');
}

run();
