var prompts = [
    'Type in a noun',
    'Type in a state',
    'Type in a verb',
    'Type in a different noun',
    'Type in someones name',
    'Type in a different verb',
    'Type in a family relative',
    'Type in the first object that comes to mind',
    'Type in a body part',
  ];

  var answers = [];
  var currentPrompt = 0;

  var nextPrompt = function () {
    if (currentPrompt != 0){
      answers.push($('input').val());
    }
      if (currentPrompt < prompts.length) {
        $('.prompt').html(prompts[currentPrompt]) + '<br><input type = "text">';
        currentPrompt = currentPrompt + 1;
    }
      else {
        showFinal();
    }
  }

  var showFinal = function() {
    $('.prompt').html('A <span class="fill">'+answers[0]+'</span> in <span class="fill">'+answers[1]+'</span> was arrested this morning after he <span class+"fill"'+answers[2]+'</span> in front of a <span class="fill"'+answers[3]+'</span> . <span class="fill">'+answers[4]+'</span> , had a history of <span class="fill">'+answers[5]+'</span> , but no one , not even his <span class="fill">'+answers[6]+'</span> ever imagined he would be arrested with a <span class="fill">'+answers[7]+'</span> stuck in his <span class="fill">'+answers[8]+'</span> .');
    $('button').hide();
  }

  $('button').click(function() {
    nextPrompt();
  });

  nextPrompt();