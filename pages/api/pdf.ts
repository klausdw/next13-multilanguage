import { NextApiHandler } from "next";
import puppeteer from "puppeteer";

const Handler: NextApiHandler = async (req, res) => {
    const lang = req.url?.split('/')[1]

    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto(`http://${req.headers.host}/${lang}`)

    const buffer = await page.pdf({
        format: 'a4',
    })
    res.end(buffer)

    await browser.close()
}

export default Handler