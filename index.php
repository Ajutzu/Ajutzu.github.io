<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AJ Castillo</title>

    <!-- Portfolio Web Icon -->
    <link rel="icon" href="images/icon.png" />

    <!-- My Own CSS -->
    <link rel="stylesheet" href="style.css">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>

    <!-- SweetAlert2 CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.css">

    <!-- SweetAlert2 JS -->
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    <!-- Font Awesome CDN -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">

    <!-- On Scroll Animation CDN CSS -->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

    <!-- On Scroll Animation CDN JS -->
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>


</head>

<body>

    <!-- Include Spline 3D -->
    <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.28/build/spline-viewer.js"></script>

    <!-- Loader -->
    <div id="loader-wrapper">
        <div id="loader"></div>
    </div>

    <!-- Nav Bar -->
    <?php include 'navbar.php'; ?>

    <!-- Home Section -->
    <?php include 'homeSection.php'; ?>

    <!-- About Section -->
    <?php include 'aboutSection.php'; ?>

    <!-- Tech Stacks Section -->
    <?php include 'techStacks.php'; ?>

    <!-- Education Section -->
    <?php include 'educationSection.php'; ?>

    <!-- Project Section -->
    <?php include 'projectSection.php'; ?>

    <!-- Footer -->
    <?php include 'footer.php'; ?>

    <!-- Live Chat Button -->
    <div class="chat-button" id="chatButton">
        <i class="fas fa-comment-dots"></i>
    </div>

    <!-- Chat Box -->
    <div class="chat-box" id="chatBox">
        <div class="chat-box-header">
            <i class="fa-solid fa-robot mx-2"></i> AJ Chat-Bot
            <span class="float-end" style="cursor: pointer;" id="closeChat">&times;</span>
        </div>
        <div class="chat-box-body" id="chatBody">
            <p>Hello! I'm Aj, Ask me what I'm doing, what I can offer, or about my history.</p>
        </div>
        <div class="chat-box-footer">
            <form id="chatForm">
                <input type="text" id="userInput" class="form-control" placeholder="Type your message..." autocomplete="off">
                <button type="submit" style="display: none;"></button> <!-- Hidden submit button to allow Enter key -->
            </form>
        </div>
    </div>

    <?php include 'chatbot/chatbot.php'; ?>

    <!-- J Query -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

    <!-- Spine 3D Source -->
    <spline-viewer url="https://prod.spline.design/e-EBPOCmCQa7a6W8/scene.splinecode"></spline-viewer>

    <!-- My JS -->
    <?php include 'javascript.php' ?>

</body>

</html>