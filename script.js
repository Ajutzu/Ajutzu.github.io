
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

