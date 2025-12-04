const fs = require("fs");

const isVercel = !!process.env.VERCEL;

const GH_URL = "https://dafetiteogaga.github.io/classic_brownline_plumbing_services/";
const VERCEL_URL = "https://classic-brownline-plumbing-services.vercel.app/";

console.log("🔍 Checking environment...");

if (!isVercel) {
	console.log("⚪ Not Vercel environment → No modifications applied.");
	process.exit(0);
}

console.log("🟡 Vercel detected → Applying changes...");

/* -----------------------------------------------------------
REMOVE HOMEPAGE FROM package.json
------------------------------------------------------------ */
try {
	const packagePath = "./package.json";
	const packageData = JSON.parse(fs.readFileSync(packagePath, "utf8"));

	if (packageData.homepage) {
		console.log("✂️ Removing homepage field from package.json...");
		delete packageData.homepage;

		fs.writeFileSync(
			packagePath,
			JSON.stringify(packageData, null, 2)
		);

		console.log("🟢 homepage removed.");
	} else {
		console.log("ℹ️ No homepage found. Skipping...");
	}
} catch (err) {
	console.error("❌ Error editing package.json:", err);
}

/* -----------------------------------------------------------
REWRITE index.html URLs (GH → Vercel)
------------------------------------------------------------ */
try {
	const htmlPath = "./public/index.html";
	let html = fs.readFileSync(htmlPath, "utf8");

	if (html.includes(GH_URL)) {
		console.log("✏️ Replacing GitHub URLs with Vercel URLs...");
		html = html.replaceAll(GH_URL, VERCEL_URL);

		fs.writeFileSync(htmlPath, html, "utf8");
		console.log("🟢 index.html URLs updated.");
	} else {
		console.log("ℹ️ No GitHub URLs found inside index.html.");
	}
} catch (err) {
	console.error("❌ Error modifying index.html:", err);
}

console.log("🎉 All Vercel adjustments complete!");
