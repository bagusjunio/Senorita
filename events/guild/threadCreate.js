module.exports = async (client, thread) => {
    if(thread.joinable){
        try{
            await thread.join();
        }catch (e){
            console.log(e)
        }
    }
}
/**
 * @INFO
 * Bot Coded Bagus Junio | https://github.com/bagusjunio/Discord-Js-Handler-Template
 * @INFO
 * Work for BJ Development
 * @INFO
 * Please mention Him / BJ Development, when using this Code!
 * @INFO
 */
