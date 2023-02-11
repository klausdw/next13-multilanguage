import { NextApiHandler } from "next";
import puppeteer from "puppeteer";

const Handler: NextApiHandler = async (req, res) => {
    try {
        const lang = req.url?.split('/')[1]

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        res.setHeader(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept'
        );
        res.setHeader('Access-Control-Allow-Credentials', 'true');
        res.setHeader('Content-Type', 'application/pdf');

        const browser = await puppeteer.launch()
        // { args: [
        //     '--ignore-certificate-errors',
        //     '--no-sandbox',
        //     '--disable-setuid-sandbox',
        //     '--window-size=1920,1080',
        //     "--disable-accelerated-2d-canvas",
        //     "--disable-gpu"],
        // ignoreHTTPSErrors: true,}

        const page = await browser.newPage()

        await page.goto(`https://next13-multilanguage.vercel.app/${lang}`)

        const buffer = await page.pdf({
            format: 'a4',
        })
        res.end(buffer)

        await browser.close()
    } catch (error) {
        console.error(error);
    }
}

export default Handler