module.exports = function(eleventyConfig){
    //Archivos statáticos que se requieren compilar a producción
    eleventyConfig.addPassthroughCopy("code/css");
    eleventyConfig.addPassthroughCopy("code/js");
    eleventyConfig.addPassthroughCopy("code/img");
    return{
        dir:{
            input:"code",
            output:"docs"
        }
    }

}