(function () {

    //Define our function responsible for extending the bot.
    function extend() {
        //If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
            return setTimeout(extend, 1 * 1000);
        }

        //Precaution to make sure it is assigned properly.
        var bot = window.bot;

        //Load custom settings set below
        bot.retrieveSettings();

        /*
         Extend the bot here, either by calling another function or here directly.
         Model code for a bot command:
         bot.commands.commandCommand = {
         command: 'cmd',
         rank: 'user/bouncer/mod/manager',
         type: 'startsWith/exact',
         functionality: function(chat, cmd){
         if(this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
         if( !bot.commands.executable(this.rank, chat) ) return void (0);
         else{
         //Commands functionality goes here.
         }
         }
         }
         */

        bot.commands.baconCommand = {
            command: 'bacon',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me Bacon!!!");
                }
            }
        };

        //Load the chat package again to account for any changes
        bot.loadChat();

    }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "Mark's Bot",
        language: "english",
        chatLink: "https://rawgit.com/ImWiked7/langcro/master/cro.json",
        maximumAfk: 60,
        afkRemoval: true,
        maximumDc: 60,
        bouncerPlus: true,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 10,
        cycleGuard: true,
        maximumCycletime: 10,
        timeGuard: true,
        maximumSongLength: 6,
        autodisable: true,
        commandCooldown: 5,
        usercommandsEnabled: true,
        lockskipPosition: 3,
        lockskipReasons: [
            ["theme", "Ova pjesma se ne uklapa sa temu sobe.  "],
            ["op", "Ova pjesma je u OP Lista (Overplayed) "],
            ["history", "Ova pjesma je u DJ Istorija "],
            ["mix", "Pustili ste mix, sto je protiv pravila. "],
            ["sound", "Pjesma koja ste pustili je imala loš kvalitet zvuka ili nije imala zvuk. "],
            ["nsfw", "Pjesma je imala NSFW (Not Safe for Work) sadržaj. "],
            ["unavailable", "Pjesma koja ste pustili nije bila dostupna za neke korisnike. "]
        ],
        afkpositionCheck: 15,
        afkRankCheck: "ambassador",
        motdEnabled: false,
        motdInterval: 3,
        motd: "Zapamtite, poštujte pravila i slušajte moderatora ako želite da se zabavite u ovoj sobi!",
        filterChat: true,
        etaRestriction: false,
        welcome: true,
        opLink: htpps://docs.google.com/document/d/1QPOZM7UC4h8lK6suXFEnsOPFy39IHQJtJQUg1j7JRsM,
        rulesLink: https://docs.google.com/document/d/1CkLFieA0y8hxl3wdDq7xIlhpREUZauxMXmemAb_OafQ,
        themeLink: null,
        fbLink: https://www.facebook.com/robminecrafters,
        youtubeLink: null,
        website: https://www.rebirthofbalkan.com,
        intervalMessages: [],
        messageInterval: 2,
        songstats: true,
        commandLiteral: "!",
        blacklists: {
            NSFW: "https://rawgit.com/Yemasthui/basicBot-customization/master/blacklists/ExampleNSFWlist.json",
            OP: "https://rawgit.com/Yemasthui/basicBot-customization/master/blacklists/ExampleOPlist.json"
        }
    }));

    //Start the bot and extend it when it has loaded.
    $.getScript('https://rawgit.com/ImWiked7/basicBot1/master/basicBot.js', extend);

}).call(this);
