$(document).ready(function() {
    function getWeather() {
        var plaats = $("#plaats").val();
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather",
            data: {
                q: plaats,
                appid: "42c8ea5772de75ffd43dc0053ffe370b",
                units: "metric"
            },
            success: function(data) {
                console.log(data);
                $("#temperatuur").text(data.main.temp + " °C");
                $("#wind").text(data.wind.speed + " m/s");
                $("#neerslag").text(data.weather[0].description);
                $("#luchtdruk").text(data.main.pressure + " hPa");
                $("#voelt").text(data.main.feels_like + " °C");
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error("Error fetching weather data: ", textStatus, errorThrown);
                alert("Er is een fout opgetreden bij het ophalen van de weergegevens: " + textStatus + " - " + errorThrown);
            }
        });
    }

    $("button").click(getWeather);
});