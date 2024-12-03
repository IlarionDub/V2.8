<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Advanced Blog with Image Upload</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="print.css" media="print">
    <link rel="icon" href="A_modern_and_minimalist_logo_for_a_smart_store_of_.png" type="image/x-icon">
    <script src="https://accounts.google.com/gsi/client" async defer></script>
    <meta name="google-signin-client_id" content="29550500670-fb38sehdm9veepu3phuomkh4mk2p8oon.apps.googleusercontent.com">
    <script src="jwt-decode.min.js"></script>

    <script>
        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    </script>
<body>


<div class="container">

    <header class="header">
        <div id="g_id_onload"
             data-client_id="29550500670-fb38sehdm9veepu3phuomkh4mk2p8oon.apps.googleusercontent.com"
             data-callback="handleCredentialResponse"
             data-auto_prompt="false">
        </div>
        <div class="g_id_signin" data-type="standard"></div>
    </header>





    <img src="A_modern_and_minimalist_logo_for_a_smart_store_of_.png"
         srcset="A_modern_and_minimalist_logo_for_a_smart_store_of_.png 480w, A_modern_and_minimalist_logo_for_a_smart_store_of_.png 800w, A_modern_and_minimalist_logo_for_a_smart_store_of_.png 1200w"
         sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px"
         alt="Logo Inteligentný obchod"
         class="logo"
         onclick="scrollToTop()">

    <div class="main1">

        <span id="loggedInUser" class="hidden"></span>
    </div>




    <main id="app">
    </main>


    <script src="app.js"></script>
</div>

<a href="https://www.aliexpress.com" target="_blank">
    <div class="ad-left">
        <img src="image_left.png" alt="image_left">
    </div>
</a>

<a href="https://www.amazon.com" target="_blank">
    <div class="ad-right">
        <img src="image_right.png" alt="image_right">
    </div>
</a>

</body>
</html>
