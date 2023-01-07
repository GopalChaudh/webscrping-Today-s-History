import express from "express";
import request from "request";
import cors from "cors";
import cheerio from "cheerio"
const date = new Date()
const arrdata = [
    [],
    []
    
]
const app = express();
const PORT = 8080;
const WebLink = 'https://en.wikipedia.org/wiki/Wikipedia:On_this_day/Today';

app.use(cors());



app.get('/',(req,res)=>{
    res.send('hi')
});
app.get('/api',(req,res)=>{
    request(WebLink,cb)  
    function cb(err,response,html){
        if(err){
            console.log(err);
        }else{
            scrapingData(html);
        }
    }
    
    function scrapingData(html){
        const $ = cheerio.load(html);
        let data = $('.mw-parser-output>p')
        let head = $(data).find('b>a')
        
            for (let i = 1; i < head.length; i++) {
                const title = $(head[i]).text();
                const url = 'https://en.wikipedia.org'+$(head[i]).attr('href');
                arrdata[0].push({
                    title,
                    url
                })
                
            }

         data = $('.mw-parser-output>ul>li')
        for (let i = 0; i < data.length; i++) {
            const title = $(data[i]).find('b>a').text();
            const url = 'https://en.wikipedia.org' + $(data[i]).find('b>a').attr('href');
            const description = $(data[i]).text();
            arrdata[1].push({
                title,
                description,
                url
            })
            
        }
        res.send(arrdata)
    }
    
});





app.listen(PORT,()=>{
    console.log(`App is running On port {http://localhost:${PORT}/}`);
})
