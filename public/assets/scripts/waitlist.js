function post(api_url, data, success_callback, fail_callback) {

    $.ajax({
        method: 'POST',
        url: api_url,
        data: JSON.stringify(data),
        dataType: 'json',
        contentType: 'application/json',
        success: function(response) {
            success_callback(response);
        },
        error: function(response) {
            fail_callback(response);
        }
    });
    }
    
    function submit_email_to_waitlist(){
        // fetch values from the frontend
        var new_signup = document.getElementById('waitlist_email').value; //fetch user signing up on frontend
        var current_url = document.URL; //fetch current URL, including potential referral token
    
        const success_callback = function(response) {
            // fetching responses
            waiter_email = response['registered_email']
            waiter_priority = response['current_priority']
            total_waiters_currently = response['total_waiters_currently']
            referral_link = response['referral_link']
    
            // hiding parts of HTML
            $('#waitlist_email').hide()
            $('#demo_submit_button').hide()
            $('#email_address_text').hide()
    
            // showing parts of HTML
            $('#current_text').show()
            $('#current_waiter_spot').show()
            $('#out_of').show()
            $('#all_waiter_spots').show()
            $('#demo_referral').show()
    
            // appending HTML information
            $('#current_waiter_spot').html(waiter_priority)
            $('#all_waiter_spots').html(total_waiters_currently)
            $('#referral_link_url').html('Your referral link is:' + referral_link)
            $('#info_ref_link').html('Click on the button to copy your referral link (also sent to your email).')
        };
    
        const fail_callback = function(response) {
    
            // perform actions based on error codes
            response_code = response['status']
            if (response_code == 422) {
                $('#error_message').html("Invalid value to sign up with.");
            } else if (response_code == 400) {
                $('#error_message').html("Error!");
            }
        };
    
        post('https://www.getwaitlist.com/waitlist',
            {email: new_signup,
                api_key: '2E43MR',
                referral_link: current_url
            }, success_callback, fail_callback);
    };
    
                        