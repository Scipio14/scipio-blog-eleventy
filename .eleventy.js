const {EleventyHtmlBasePlugin} = require('@11ty/eleventy')

module.exports = function(eleventyConfig){
    //Archivos statáticos que se requieren compilar a producción
    eleventyConfig.addPassthroughCopy("code/css");
    eleventyConfig.addPassthroughCopy("code/js");
    eleventyConfig.addPassthroughCopy("code/img");

    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
    
    return{
        dir:{
            input:"code",
            output:"docs"
        }
    }

}