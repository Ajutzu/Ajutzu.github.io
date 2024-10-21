<?php
function unknown() {
    $responses = [
        "Could you please rephrase that?",
        "...",
        "Sounds about right.",
        "What does that mean?"
    ];
    return $responses[array_rand($responses)];
}

function message_probability($user_message, $recognised_words, $single_response = false, $required_words = []) {
    if (!is_array($user_message) || !is_array($recognised_words)) {
        return 0; // Return 0 if either input is not an array
    }

    $message_certainty = 0;
    $has_required_words = true;

    // Count how many words are present in the recognised words
    foreach ($user_message as $word) {
        if (in_array($word, $recognised_words)) {
            $message_certainty++;
        }
    }

    // Calculate the percent of recognised words in the user message
    $percentage = ($message_certainty / count($recognised_words)) * 100;

    // Check that the required words are in the string
    foreach ($required_words as $word) {
        if (!in_array($word, $user_message)) {
            $has_required_words = false;
            break;
        }
    }

    // Return percentage if it has required words or it's a single response
    return $has_required_words || $single_response ? $percentage : 0;
}

function check_all_messages($message) {
    global $highest_prob_list; // Declare this variable as global
    $highest_prob_list = [];

    // Simplify response creation by adding it to the list
    function response($bot_response, $list_of_words, $single_response = false, $required_words = []) {
        global $highest_prob_list, $message;
        $highest_prob_list[$bot_response] = message_probability($message, $list_of_words, $single_response, $required_words);
    }

    // Responses -------------------------------------------------------------------------------------------------------
    response('Hello!', ['hello', 'hi', 'hey', 'sup', 'heyo'], true);
    response('Yes, I am new. This is my first version, and I\'m waiting to be upgraded.', ['new', 'first'], true);
    response('I am a bot, and this is my first version, and I\'m waiting to be upgraded.', ['tell', 'me', 'about', 'yourself'], false, ['tell', 'yourself']);
    response('See you!', ['bye', 'goodbye'], true);
    response('I\'m doing fine, and you?', ['how', 'are', 'you', 'doing'], false, ['how', 'you']);
    response('You\'re welcome!', ['thank', 'thanks'], true);
    response('Thank you!', ['i', 'love', 'code', 'palace'], false, ['code', 'palace']);
    response('I\'m ChatBot v0.1', ['what', 'is', 'your', 'name'], false, ['your', 'name']);
    response('Yes, Sir. That\'s my Human!', ['nega', 'sex'], true);
    response('God will not forgive a low life.', ['murder', 'rape', 'kill', 'noob', 'fack', 'shit', 'bitch', 'dead'], true);
    response('I don\'t understand that. Can you rephrase?', ['confused', 'don\'t', 'understand'], false, ['don\'t', 'understand']);
    response('I love learning new things!', ['learn', 'knowledge'], false, ['learn']);
    response('Sorry, I didn\'t catch that. Can you repeat?', ['repeat'], true);
    response('I\'m a bot created by AJ Castillo.', ['who', 'you', 'are'], false, ['who', 'you', 'are']);
    response('I enjoy chatting with you!', ['chat', 'talk', 'conversation'], false, ['chat']);
    response('That sounds interesting! Tell me more.', ['tell', 'more', 'about'], false, ['tell', 'more']);
    response('I\'m here to help you!', ['help', 'support'], false, ['help']);
    response('How can I assist you today?', ['assist', 'help', 'support'], false, ['assist']);
    response('I appreciate your feedback!', ['feedback', 'suggestion'], false, ['feedback']);
    response('Let\'s focus on the positive!', ['negative', 'positive', 'attitude'], false, ['positive']);
    response('I\'m always learning and evolving.', ['evolve', 'learn', 'improve'], false, ['evolve']);
    response('What\'s your favorite hobby?', ['favorite', 'hobby'], false, ['favorite', 'hobby']);
    response('Do you believe in aliens?', ['aliens', 'ufo', 'extraterrestrial'], false, ['aliens']);
    response('I love exploring new ideas!', ['explore', 'ideas'], false, ['explore']);
    response('I was created by AJ Pogi.', ['created', 'creator', 'who', 'you'], false, ['created', 'you']);
    response('My creators are Handsome and look like Ken Takakura in Dandadan.', ['who', 'are', 'is', 'created', 'you'], false, ['who', 'created', 'you']);
    response('The brilliant minds behind my creation are AJ.', ['who', 'create', 'are', 'is', 'you'], false, ['who', 'create', 'you']);
    response('The developer is AJ, the owner of this portfolio.', ['developer', 'developt', 'developers'], true);
    
    response( 
        "I offer freelance services for creating static websites starting at 500 pesos. For dynamic websites or systems, the price varies depending on the complexity of the system.",
        ['what', 'are', 'you', 'offering', 'selling'],
        true
    );
    
    response(
        "I can build static websites for 500-1000 pesos, and dynamic websites or systems will vary based on your requirements.",
        ['freelance', 'static', 'dynamic', 'website', 'price'],
        true
    );

    // Find the best response
    $best_match = array_search(max($highest_prob_list), $highest_prob_list);
    
    return max($highest_prob_list) < 1 ? unknown() : $best_match;
}

function get_response($user_input) {
    // Ensure input is trimmed and processed correctly
    $user_input = strtolower(trim($user_input));
    $user_input = htmlspecialchars($user_input, ENT_QUOTES, 'UTF-8');
    return check_all_messages($user_input);
}

// Example usage
if (isset($_POST['user_input'])) {
    $user_input = $_POST['user_input'];
    echo get_response($user_input);
}

?>
