var app = angular
        .module("myModule", [])
        .controller("myController", function ($scope) {

            var data = [
            {
                "tweet": "Today we express our deepest gratitude to all those who have served in our armed forces. #ThankAVet",
                "lang": "en", 
                "sentiment": {
                    "score": 0.7, 
                    "type": "positive"
                }, 
                "time": 1, 
                "timestamp": "2017-04-04T03:35:42.345"
            }, 
            {
                "tweet":"Busy day planned in New York. Will soon be making some very important decisions on the people who will be running our government!",
                "lang": "en", 
                "sentiment": {
                    "score": 0.7, 
                    "type": "positive"
                }, 
                "time": 1, 
                "timestamp": "2017-04-04T03:35:42.775"
            }, 
            {
                "tweet":"Love the fact that the small groups of protesters last night have passion for our great country. We will all come together and be proud!",
                "lang": "en", 
                "sentiment": {
                    "score": 0.7, 
                    "type": "positive"
                }, 
                "time": 0, 
                "timestamp": "2017-04-04T03:35:43.205"
            }, 
            {
                "tweet":"Just had a very open and successful presidential election. Now professional protesters, incited by the media, are protesting. Very unfair!",
                "lang": "en", 
                "sentiment": {
                    "score": -0.625, 
                    "type": "negative"
                }, 
                "time": 0, 
                "timestamp": "2017-04-04T03:35:43.627"
            }, 
            {
                "tweet":"A fantastic day in D.C. Met with President Obama for first time. Really good meeting, great chemistry. Melania liked Mrs. O a lot!",
                "lang": "en", 
                "sentiment": {
                    "score": 0.78, 
                    "type": "positive"
                }, 
                "time": 0, 
                "timestamp": "2017-04-04T03:35:44.062"
            }, 
            {
                "tweet": "Happy 241st birthday to the U.S. Marine Corps! Thank you for your service!!",
                "lang": "en", 
                "sentiment": {
                    "score": 0.7333333333333334, 
                    "type": "positive"
                }, 
                "time": 0, 
                "timestamp": "2017-04-04T03:35:44.500"
            }, 
            {
                "tweet":"Such a beautiful and important evening! The forgotten man and woman will never be forgotten again. We will all come together as never before",
                "lang": "en", 
                "sentiment": {
                    "score": 0.9, 
                    "type": "positive"
                }, 
                "time": 0, 
                "timestamp": "2017-04-04T03:35:44.932"
            }, 
            {
                "tweet":"Watching the returns at 9:45pm. #ElectionNight #MAGA_Ùà¼_Ùàü https://t.co/HfuJeRZbod",
                "lang": "en", 
                "sentiment": {
                    "score": 0.0, 
                    "type": "neutral"
                }, 
                "time": 0, 
                "timestamp": "2017-04-04T03:35:45.366"
            }, 
            {
                "tweet":"RT @IvankaTrump: Such a surreal moment to vote for my father for President of the United States! Make your voice heard and vote! #Election2‰Û",
                "lang": "en", 
                "sentiment": {
                    "score": 0.7, 
                    "type": "positive"
                }, 
                "time": 1, 
                "timestamp": "2017-04-04T03:35:45.809"
            }
        ];


            $scope.data = data;
            $scope.sortColumn = "time";

});