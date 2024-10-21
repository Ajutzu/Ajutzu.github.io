<script>

 AOS.init();
 
                                                                                                                                                                        // Chat Bot

$(document).ready(function() {
    // Handle form submission
    $('#chatForm').submit(function(e) {
        e.preventDefault(); // Prevent form from reloading the page

        var userInput = $('#userInput').val(); // Get the user input
        if (userInput.trim() !== "") { // Check if input is not empty
            // Add the user's message to the chat
            $('#chatBody').append('<p><strong style="color: #1cdcfe">You:</strong> ' + userInput + '</p>');
            
            // Send the message to the PHP chatbot script
            $.ajax({
                type: 'POST',
                url: 'chatbot/chatbot.php', // The PHP file that contains your chatbot logic
                data: { user_input: userInput },
                success: function(response) {
                    // Add the bot's response to the chat
                    $('#chatBody').append('<p><strong style="color: #1cdcfe"><i class="fa-solid fa-robot mr-1"></i> Bot:</strong> ' + response + '</p>');
                    
                    // Scroll to the bottom of the chat
                    $('#chatBody').scrollTop($('#chatBody')[0].scrollHeight);
                },
                error: function() {
                    $('#chatBody').append('<p><strong>Bot:</strong> Sorry, something went wrong!</p>');
                }
            });
        }

        // Clear the input field after submission
        $('#userInput').val('');
    });

    // Close chat function (for demonstration purposes)
    $('#closeChat').click(function() {
        $('#chatBox').hide();
    });
});


                                                                                                                                                                        // Detect Spline

window.addEventListener("load", function () {
  const splineViewer = document.getElementById("splineCanvas");

  setTimeout(() => {
    document.getElementById("loader-wrapper").style.display = "none";
  }, 3000); 
});

                                                                                                                                                                        // Swalfire

window.onload = function() {
    Swal.fire({
      title: "<span class='text-center'>Background Controls<br><span style='border:2px solid black; padding: 4px; border-radius: 4px; margin: 15px; display: inline-block;'>W</span><br> <span style='border:2px solid black; padding: 4px; border-radius: 4px;'>A</span>      <span style='border:2px solid black; padding: 4px; border-radius: 4px;'>S</span>      <span style='border:2px solid black; padding: 4px; border-radius: 4px;'>D</span></span>",
      width: 600,
      padding: "3em",
      color: "#87c43a",  
      background: "#3e82c5",  
      backdrop: `
        rgba(0,0,123,0.4)
        left top
        no-repeat
      `,
      confirmButtonText: 'OK',
    });
};

                                                                                                                                                                        // ChatBot

  const chatButton = document.getElementById('chatButton');
  const chatBox = document.getElementById('chatBox');
  const closeChat = document.getElementById('closeChat');

    // Toggle chat box visibility
  chatButton.addEventListener('click', function() {
        chatBox.style.display = chatBox.style.display === 'none' ? 'block' : 'none';
  });

    // Close chat box
  closeChat.addEventListener('click', function() {
        chatBox.style.display = 'none';
  });

</script>