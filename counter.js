// Extremely Simple Countdown jQery Plugin

(function( $ ) {
    var secondsPerMinute    = 60,
        secondsPerHour      = 3600,
        secondsPerDay       = 86400,
        secondsPerWeek      = 604800;
    

    $.fn.simpleCountdown = function(options) {
        // Create some defaults, extending them with any options that were provided
        var settings = $.extend( {
                'showSeconds' : true,
                'showZero' : false,
                'tickAt' : 1000
            }, options);

        var $this = this,
            targetDate = new Date(settings.year, settings.month-1, settings.day);

        (function tick(){
            var timeLeft = Math.floor((targetDate - (new Date())) / 1000), // time left in seconds
                w, d, h, m, s;

            if (timeLeft > 0) {

                // Number of days
                d = Math.floor(timeLeft / secondsPerDay);
                timeLeft -= d * secondsPerDay;

                // Number of hours left
                h = Math.floor(timeLeft / secondsPerHour);
                timeLeft -= h * secondsPerHour;

                // Number of minutes left
                m = Math.floor(timeLeft / secondsPerMinute);
                timeLeft -= m * secondsPerMinute;

                // Number of seconds left
                s = timeLeft;
                
                var html = d + " gün, " + h + " saat, " + m + " dakika";

                if (settings.showZero) {
                    html += " " + s + " saniye ";
                };

                $this.html(html);
            };

            // console.log(d + ' gün, ' + h + ' saat, ' + m + ' dakika ' + s + ' s.');
            setTimeout(tick, settings.tickAt);
        })();
    };
}) ( jQuery );
