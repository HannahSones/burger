// Change burger state on button click
$(function() {
  $('.change-devour').on('click', function(event) {
    event.preventDefault();
    const id = $(this).data('id');
    const newDevour = $(this).data('newdevour');

    const newDevouredState = {
      devoured: newDevour,
    };

    $.ajax(`/api/burgers/${id}`, {
      type: 'PUT',
      data: newDevouredState,
    }).then(function() {
      console.log('changed devoured to', newDevour);
      // Reloads the page to get updated list
      location.reload();
    });
  });

  $('.create-form').on('submit', function(event) {
    event.preventDefault();

    const burgerValue = $('#br')
      .val()
      .trim();
    if (burgerValue) {
      const newBurger = {
        burger_name: $('#br')
          .val()
          .trim(),
        devoured: 0,
      };

      $.ajax('/api/burgers', {
        type: 'POST',
        data: newBurger,
      }).then(function() {
        console.log('created new burger');
        // Reload the page to get the updated list
        location.reload();
      });
    }
  });

  // Delete selected burger
  $('.delete-burger').on('click', function(event) {
    const id = $(this).data('id');

    $.ajax(`/api/burgers/${id}`, {
      type: 'DELETE',
    }).then(function() {
      console.log('deleted burger', id);
      // Reloads the page to get updated list
      location.reload();
    });
  });
});
