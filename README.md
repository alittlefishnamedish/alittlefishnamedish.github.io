<!DOCTYPE html>
<html lang="en">
<head>
    <link href = "johnny.css" type="text/css" rel="stylesheet"/>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Input Display with Local Storage</title>
</head>
<body>
    <h2>Enter Your Text:</h2>
    <form id="textInputForm">
        <textarea id="userInput" name="userInput" rows="4" cols="50"></textarea><br>
        <button type="submit">Submit</button>
    </form>
<div id="displayArea">
        <!-- User input will be displayed here -->
    </div>

<script>
        // Check if there's a saved userInput in localStorage
        var savedUserInput = localStorage.getItem("userInput");
        if (savedUserInput) {
            document.getElementById("displayArea").innerHTML = savedUserInput;
        }

        document.getElementById("textInputForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent form submission
            var userInput = document.getElementById("userInput").value;
            document.getElementById("displayArea").innerHTML = userInput.replace(/\n/g, "<br>") + "</p>";
            
            // Save userInput to localStorage
            localStorage.setItem("userInput", userInput);
        });
    </script>
</body>
</html>

