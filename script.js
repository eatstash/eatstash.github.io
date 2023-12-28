document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("mc-embedded-subscribe-form");

    function submitCallback(e) {
        gtag_report_conversion('https://eatstash.us8.list-manage.com/subscribe/post?u=c8b36e9a5f797871be92d043d&id=5afb79ace6&f_id=00cb76e0f0')
    }

    function gtag_report_conversion(url) {
        var callback = function () {
            // if (typeof(url) != 'undefined') {
            // window.location = url;
            // }
        };
        gtag('event', 'conversion', {
            'send_to': 'AW-11458489302/4NfZCNWGiIMZENbX6tcq',
            'event_callback': callback
        });
        return false;
    }

    form.addEventListener("submit", submitCallback);
});
