<?php

foreach($_POST as $key => $val) { 
 $message .= "$key: $val\n"; 
} 
mail($to, $subject, $message); 

