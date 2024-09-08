$(function () {
    const updateImg = (src, alt) => {
        $("#darklight-img").attr({ src, alt })
    }


    $(':button').on('click', (e) => {
        const modeName = e.target.id;
        if (modeName === 'dark') {
            updateImg('moon.jpeg', 'cartoon moon');
            $('body').addClass('darkmode');
        } else if (modeName === 'light') {
            updateImg('sun.jpeg', 'cartoon sun');
            $('body').removeClass('darkmode');
        }

    })
})