// BASIC NAVIGATION CONTENTS ---------------------------------------------------------------------------------------------------------------------------

// LINK TO GO HOME

$('#go-home').on('click', function (event) {
  event.preventDefault();
  window.location.href = '/';
});

// REGISTER & LOGGING IN CONTENTS ---------------------------------------------------------------------------------------------------------------------------

// LINK TO GO TO REGISTER PAGE

$('#register').on('click', function (event) {
  event.preventDefault();
  window.location.href = '/register';
});

$('#add-user').on('click', function (event) {
  event.preventDefault();

  const newAccount = {
    firstName: $('#inputFirst').val().trim(),
    lastName: $('#inputLast').val().trim(),
    email: $('#inputEmail').val().trim(),
    password: $('#inputPassword').val().trim()
  };

  if (newAccount.password.length > 0 && newAccount.email.length > 0 && newAccount.password.length > 0 && newAccount.lastName.length > 0 && newAccount.firstName.length > 0) {
    $.ajax({
      type: 'POST',
      url: '/api/register',
      data: newAccount
    }).then(() => {
      window.location.href = '/';
    });
  } else {
    console.log('**Please fill out entire form**');
    $('#create-err-msg').empty('').text('**Please fill out entire form**');
  }
});

// LINK TO OPEN LOG IN MODAL

$('#login-modal').on('click', function (event) {
  event.preventDefault();
  $('#user-info').modal('show');
});

// WHEN USER HITS SUBMIT ON LOG IN MODAL

$('#login').on('click', function (event) {
  event.preventDefault();

  const user = {
    email: $('#email').val().trim(),
    password: $('#user_password').val().trim()
  };

  $.post('/api/login', user, (result) => {
    // console.log(result);
    if (result.loggedIn) {
      $(document.location).attr('href', '/dashboard');
    } else {
      $('#login-err-msg').empty('').text(result.error);
      $('#user-info').modal('hide');
    }
  });
});

// PROFILE CONTENTS ---------------------------------------------------------------------------------------------------------------------------

// UPDATE ABOUT ME TEXTAREA
$('#update-aboutme').click(function (event) {
  event.preventDefault();
  const aboutmeSection = $('.aboutme-section');
  const aboutmeTextarea = $('<textarea>');
  aboutmeTextarea.addClass('aboutme-textarea');
  aboutmeTextarea.addClass('form-control');
  const existingBio = $('.original-userbio').text();
  aboutmeTextarea.text(existingBio);
  aboutmeTextarea.appendTo(aboutmeSection);
  $('#update-aboutme').attr('disabled', true);
});

// RUNS IMGBB TO UPLOAD PROFILE PICTURE

$('#change-profile-image').click(function (event) {
  event.preventDefault();
  $('.imgbb-button').click();
});

// PARSE URL AND ADD PFOFILE PICTURE PREVIEW

$('#profile-picture-url').on('input', function (event) {
  event.preventDefault();
  const profileurlFull = $('#profile-picture-url').val();
  let shortenedProfileurl = profileurlFull.slice(39);
  shortenedProfileurl = shortenedProfileurl.split('"')[0];
  $('#profile-picture-url').val(shortenedProfileurl);
  const profileFile = $('#profile-image-file');
  profileFile.attr('src', shortenedProfileurl);
  $('#profile-picture-url').val('');
});

// UPDATE USER INFORMATION

$('#update-user').on('click', function (event) {
  event.preventDefault();

  const id = $(this).data('id');

  const changeUser = {
    firstName: $('#inputFirst').val().trim(),
    lastName: $('#inputLast').val().trim(),
    email: $('#inputEmail').val().trim(),
    password: $('#inputPassword').val().trim(),
    profileUrl: $('#profile-picture-url').attr('src'),
    userBio: $('.aboutme-textarea').text().trim()
  };
  $('#err-msg').empty('');
  console.log(changeUser);

  // THIS ONLY EDITS IF THE USER ENTERS THEIR PASSWORD

  if (changeUser.password.length > 0 && changeUser.email.length > 0 && changeUser.password.length > 0 && changeUser.lastName.length > 0 && changeUser.firstName.length > 0) {
    $.ajax({
      type: 'PUT',
      url: `/api/users/${id}`,
      data: changeUser
    }).then((result) => {
      console.log('Updated user:', result);
      window.location.href = '/logout';
    });
  } else {
    console.log('**Please fill out entire form**');
    $('#update-err-msg').empty('').text('**Please fill out entire form**');
  }
});

// OPENS DELETE ACCOUNT MODAL
$('#delete-user').on('click', function (event) {
  event.preventDefault();
  $('#err-msg').empty('');
  $('#delete-user-modal').modal('show');
});

// CONFIRMING ACCOUNT DELETION ON DELETE ACCOUNT MODAL

$('#confirm-delete').on('click', function (event) {
  event.preventDefault();

  const id = $(this).data('id');

  const deleteUser = {
    email: $('#userEmail').val().trim(),
    password: $('#userPassword').val().trim()
  };

  if (deleteUser.email.length > 0 && deleteUser.password.length > 0) {
    $.ajax({
      type: 'POST',
      url: '/api/users/confirm',
      data: deleteUser
    }).then((result) => {
      if (result) {
        $.ajax(`/api/users/${id}`, {
          type: 'DELETE'
        }).then(() => {
          console.log('Deleted user', deleteUser);
          window.location.href = '/logout';
        });
      } else {
        $('#err-msg').empty('').text('Wrong credentials!');
      }
    });
  } else {
    console.log('fill out entire form');
    $('#err-msg').empty('').text('fill out entire form');
  }
});

// CAKE SUBMISSION CONTENTS ---------------------------------------------------------------------------------------------------------------------------

// LINK TO GO TO SUBMIT CAKE PAGE (UNFINISHED, NEED TO CHANGE ID TO REMOVE "MODAL")

$('#submission-modal').on('click', function (event) {
  event.preventDefault();
  window.location.href = '/submit-cake';
});

// ADDS INSTRUCTION TEXTAREAS UP UNTIL 15 ENTRIES

let instructionAmt = 0;
$('#add-instruction').click(function (event) {
  event.preventDefault();
  if (instructionAmt >= 10) {
    return;
  }
  const instructionSection = $('#instruction-section');
  const instructionEntry = $('<div>');
  instructionEntry.addClass('instruction-entry');
  instructionEntry.attr('id', 'instruction' + (instructionAmt + 1));
  instructionEntry.appendTo(instructionSection);
  const instructionLabel = $('<label>');
  instructionLabel.text('Instruction ' + (instructionAmt + 1) + ': ');
  const instructionTextarea = $('<textarea>');
  instructionTextarea.addClass('form-control');
  instructionTextarea.attr('rows', 6);
  instructionLabel.appendTo(instructionEntry);
  instructionTextarea.appendTo(instructionEntry);
  instructionAmt++;
});

// DELETES INSTRUCTION TEXTAREAS UNTIL 0 REMAIN

$('#delete-instruction').click(function (event) {
  event.preventDefault();
  if (instructionAmt <= 0) {
    return;
  }
  $('#instruction' + instructionAmt).remove();
  instructionAmt--;
});

// ADDS INGREDIENT TEXTBOXES UP UNTIL 15 ENTRIES

let ingredientAmt = 0;
$('#add-ingredient').click(function (event) {
  event.preventDefault();
  if (ingredientAmt >= 10) {
    return;
  }
  const ingredientSection = $('#ingredient-section');
  const ingredientEntry = $('<div>');
  ingredientEntry.addClass('ingredient-entry');
  ingredientEntry.attr('id', 'ingredient' + (ingredientAmt + 1));
  ingredientEntry.appendTo(ingredientSection);
  const ingredientLabel = $('<label>');
  ingredientLabel.text('Ingredient ' + (ingredientAmt + 1) + ': ');
  const ingredientInput = $('<input>');
  ingredientInput.attr('type', 'text');
  ingredientInput.addClass('form-control');
  ingredientLabel.appendTo(ingredientEntry);
  ingredientInput.appendTo(ingredientEntry);
  ingredientAmt++;
});

// DELETES INGREDIENT TEXTBOXES UNTIL 0 REMAIN

$('#delete-ingredient').click(function (event) {
  event.preventDefault();
  if (ingredientAmt <= 0) {
    return;
  }
  $('#ingredient' + ingredientAmt).remove();
  ingredientAmt--;
});

// RUNS IMGBB TO UPLOAD IMAGE

$('#add-images').click(function (event) {
  event.preventDefault();
  $('.imgbb-button').click();
  $('#add-images').attr('disabled', true);
});

// PARSE URL AND ADD PREVIEW

$('#cake-img-urls').on('input', function (event) {
  event.preventDefault();
  const cakeurlFull = $('#cake-img-urls').val();
  let shortenedCakeurl = cakeurlFull.slice(43);
  shortenedCakeurl = shortenedCakeurl.split('"')[0];
  $('#cake-img-urls').val(shortenedCakeurl);
  const submitContainer = $('.image-submit');
  const imagePreview = $('<img>');
  imagePreview.attr('id', 'image-preview');
  imagePreview.attr('src', shortenedCakeurl);
  imagePreview.prependTo(submitContainer);
});

// DELETE IMAGE URL QUEUED AND DELETE PREVIEW

$('#delete-images').click(function (event) {
  event.preventDefault();
  $('#cake-img-urls').val('');
  $('#add-images').attr('disabled', false);
  $('#image-preview').remove();
});
// OTHER CONTENTS ---------------------------------------------------------------------------------------------------------------------------

// USER PROFILE LINK FROM THEIR CAKE SUBMISSION

// $('.user-profile-link').click(function (event) {
//   var id = $(this).data('id');
//   $.ajax(`/api/cakes/${id}`),{
//     type: "GET"
//   }).then((data) => {

//   }

// window.location.href = '/userprofile';
// });

// POST REQUEST TO SEND CAKES TO DATABASE

$('#cake-submit').on('click', function (event) {
  event.preventDefault();
  // const combinedIngredients = $('#ingredient1.text()') + '<li>' + $('#ingredient2.text()') + '<li>' + $('#ingredient3').text() + '<li>' + $('#ingredient4').text() + '<li>' + $('#ingredient5').text() + '<li>' + $('#ingredient6').text() + '<li>' + $('#ingredient7').text() + '<li>' + $('#ingredient8').text() + '<li>' + $('#ingredient9').text() + '<li>' + $('#ingredient10').text() + '<li>';

  // const combinedInstructions = $('#instruction1').text() + '<li>' + $('#instruction2').text() + '<li>' + $('#instruction3').text() + '<li>' + $('#instruction4').text() + '<li>' + $('#instruction5').text() + '<li>' + $('#instruction6').text() + '<li>' + $('#instruction7').text() + '<li>' + $('#instruction8').text() + '<li>' + $('#instruction9').text() + '<li>' + $('#instruction10').text() + '<li>';

  const newCake = {
    name: $('#cake-name').val().trim(),
    difficulty: $('#cake-difficulty').val().trim()
    // instructions: combinedInstructions.trim(),
    // ingredients: combinedIngredients.trim(),
    // cakeimageUrl: $('#cake-img-urls').text()
  };
  console.log(newCake);

  // SENDS THE POST REQUEST TO THE DATABASE
  $.ajax('/api/cakes', {
    type: 'POST',
    withCredentials: true,
    data: newCake
  }).then(
    function () {
      console.log('New cake added!');
      location.reload();
    }
  );
});

$(document).ready(function () {
  const displayCakes = {
    name: this.name,
    difficulty: this.difficulty
    // cakeimageUrl: $('#cake-img-urls').text()
  };
  $.ajax('/', {
    type: 'GET',
    data: displayCakes
  }).then(
    function () {
      console.log('ajax was successful');
      console.log(displayCakes);
    }
  );
});

// $(document).ready(function () {
//   const displayCakes = {
//     name: this.name,
//     difficulty: this.difficulty
//     // cakeimageUrl: $('#cake-img-urls').text()
//   };
//   $.ajax('/', {
//     type: 'GET',
//     data: displayCakes
//   }).then(
//     function () {
//       console.log('ajax was successful');
//       console.log(displayCakes);
//     }
//   );
// });

$('#submit-comment').on('click', function (event) {
  event.preventDefault();

  const newComment = {
    body: $('#cake-comment').text()
  };

  console.log(newComment);

  $.ajax('/api/user/');
});

// DELETES CAKE FROM DATABASE (UNFINISHED)

$('#delete-cake').on('click', function (event) {
  event.preventDefault();
  const deleteCake = {
    name: $('#cake-name').val().trim(),
    difficulty: $('#cake-difficulty').val().trim(),
    instructions: $('#cake-instructions').val(),
    ingredients: $('#cake-ingredients').val().trim(),
    cakeimageUrl: $('#image-preview').attr('src')
  };
  console.log(deleteCake);
  $.ajax({
    type: 'DELETE',
    // need id to reference
    url: '/api/Cakes',
    data: deleteCake
  }).then(
    function () {
      (console.log('Cake deleted'));
      location.reload();
    });
});

// ADD COMMENT TO DATABASE:
$('#delete-comment').on('click', function (event) {
  event.preventDefault();
  const addComment = {
    user: $('#user').val().trim(),
    body: $('#body').val().trim(),
    likes: $('#likes').val().trim()
  };
  console.log(addComment);
  $.ajax({
    type: 'POST',
    // need id to reference
    url: '/api/Cakes',
    data: addComment
  }).then(
    function () {
      (console.log('Comment deleted'));
      location.reload();
    });
});

// TAKES USER TO RESPECTIVE CAKE PAGES (TEMPFIX)

$('#carrotcake').click(function (event) {
  window.location.href = '/cakes/carrotcake';
});

$('#redvelvetcake').click(function (event) {
  window.location.href = '/cakes/redvelvetcake';
});
$('#chocolatecake').click(function (event) {
  window.location.href = '/cakes/chocolatecake';
});

$('#marklee').click(function (event) {
  window.location.href = '/user-profiles/marklee';
});

$('#adamgates').click(function (event) {
  window.location.href = '/user-profiles/adamgates';
});

$('#carlabean').click(function (event) {
  window.location.href = '/user-profiles/carlabean';
});
