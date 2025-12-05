const fs = require("fs");
const dns = require("dns").promises; // <-- DNS module for domain validation

/* -----------------------------------------------------------
in package.json under scripts,
use: "build": "node scripts/vercel-setup.js && react-scripts build",
------------------------------------------------------------ */

const isVercel = !!process.env.VERCEL;

const GH_URL = "https://dafetiteogaga.github.io/classic_brownline_plumbing_services/";
const VERCEL_FREE_URL = "https://classic-brownline-plumbing-services.vercel.app/";
const CUSTOM_DOMAIN = "classicbrownline.com";
const CUSTOM_URL = `https://${CUSTOM_DOMAIN}/`;

console.log("🔍 Checking environment...");

if (!isVercel) {
	console.log("⚪ Not Vercel environment → No modifications applied.");
	process.exit(0);
}

console.log("🟡 Vercel detected → Applying changes...");

async function domainIsValid(domain) {
	console.log(`🔎 domain lookup: ${domain}`);
	try {
		console.log(`🔎 Checking DNS for ${domain}...`);
		const result = await dns.lookup(domain);
		console.log(`✅ Domain resolved: ${result.address}`);
		return true;
	} catch (e) {
		console.log(`❌ Domain lookup failed: ${e.message}`);
		return false;
	}
}

(async () => {
	console.log("🔧 Determining final url to use...")
	;
	// Determine the correct URL
	let finalDomainURL = VERCEL_FREE_URL;

	if (await domainIsValid(CUSTOM_DOMAIN)) {
		finalDomainURL = CUSTOM_URL;
		console.log(`🟢 Using CUSTOM DOMAIN: ${finalDomainURL}`);
	} else {
		console.log(`🟡 Using VERCEL FREE URL fallback: ${VERCEL_FREE_URL}`);
	}

	/* -----------------------------------------------------------
	REMOVE HOMEPAGE FROM package.json
	------------------------------------------------------------ */
	try {
		console.log("🔧 Editing package.json...");
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
	REWRITE index.html URLs
	GH_URL → finalDomainURL
	------------------------------------------------------------ */
	try {
		console.log("🔧 Modifying index.html...");
		const htmlPath = "./public/index.html";
		let html = fs.readFileSync(htmlPath, "utf8");

		if (html.includes(GH_URL)) {
			console.log("✏️ Replacing GitHub URLs with chosen domain...");
			html = html.replaceAll(GH_URL, finalDomainURL);

			fs.writeFileSync(htmlPath, html, "utf8");
			console.log("🟢 index.html URLs updated.");
		} else {
			console.log("ℹ️ No GitHub URLs found inside index.html.");
		}
	} catch (err) {
		console.error("❌ Error modifying index.html:", err);
	}

	console.log("🎉 All Vercel adjustments complete!");
})();
