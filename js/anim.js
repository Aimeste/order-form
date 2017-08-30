$(document).ready(function(){
    
   //When we stop pushing on a key in the card div
   $("#card").keyup(function() {
       
       //Variable Déclaration to not reuse it many times - #Card + #Type - First letter and Second letter - Number of number.
        var $card = $(this).val();
        var $type = $("#type");
        var $valid = $("#valid");
        var $firstNumber = $card.charAt(0);
        var $secondNumber = $card.charAt(1);
        var $length = $card.length;
        
        //If the first number is a 4 == visa.
        if($firstNumber == 4){
            
            //I write Visa
            $type.text("Visa ");
            
            //If the number of my card number is between 13 and 16, i checked with a font-awesome icon
            if($length >= 13 && $length <= 16){
                
                $type.append('<i class="fa fa-check" aria-hidden="true"></i>');
                
            }
            
        }
       
        //If the first number is a 5 == MasterCard.
        else if($firstNumber == 5){
            
            //I write Mastercard
            $type.text("MasterCard ");
            
            //If the number of my card number is equal to 16, i checked with a font-awesome icon
            if($length == 16){
                
                $type.append('<i class="fa fa-check" aria-hidden="true"></i>');
                
            }
        }
        
        //If the first number is a 4
        else if($firstNumber == 3){
            
            //And second number is a 4 or a 7 == American Express.
            if($secondNumber == 4 || $secondNumber == 7){
                
                //I write American Express
                $type.text('American Express ');
            
                //If the number of my card number is equal to 15, i checked with a font-awesome icon
                if($length == 15){
                    
                    $type.append('<i class="fa fa-check" aria-hidden="true"></i>');
                    
                }
                
            }
            
            //If the second number si not 4 or 7 == Unknow
            else{
                
                $type.text("?");
                
            }
        }
        
        //If there's no condition validate == Unknow
        else{
            
            $type.text("?");
            
        }

        //On appelle notre plugin
        $("#card").validateCreditCard(function(result) {
           //Si le résultat est true, alors on dit que la carte est valide
           if(result.valid){
               $valid.html('Valid card <i class="fa fa-check" aria-hidden="true"></i>');
           }
           //Si le résultat est false, alors on dit que la carte est invalide
           else{
               $valid.html('Invalid card <i class="fa fa-times" aria-hidden="true"></i>');
           }
        });
        
    });
    
});