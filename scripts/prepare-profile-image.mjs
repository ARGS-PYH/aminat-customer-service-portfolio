import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const parts = [
  "src/assets/aminat-profile-part-1.txt",
  "src/assets/aminat-profile-part-2.txt",
  "src/assets/aminat-profile-part-3.txt"
];
const encoded = (await Promise.all(
  parts.map((part) => readFile(path.join(root, part), "utf8"))
)).join("").replace(/\s+/g, "");

if (encoded.length % 4 !== 0 || !/^[A-Za-z0-9+/]+={0,2}$/.test(encoded)) {
  throw new Error("The compressed profile image data is incomplete or invalid.");
}

const image = Buffer.from(encoded, "base64");
if (
  image.length < 12 ||
  image.toString("ascii", 0, 4) !== "RIFF" ||
  image.toString("ascii", 8, 12) !== "WEBP"
) {
  throw new Error("Profile image failed WebP integrity checks.");
}

const destination = path.join(root, "public", "assets", "aminat-profile.webp");
await mkdir(path.dirname(destination), { recursive: true });
await writeFile(destination, image);
console.log(`Prepared Aminat's profile image (${image.length} bytes).`);
