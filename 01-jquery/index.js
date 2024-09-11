$(function () {
    const updateStyles = ({ selector = 'body', className, willAddClass }) => {
        willAddClass ?
            $(selector).addClass(className, 140) :
            $(selector).removeClass(className, 140);
    }

    const updateImg = ({ cssId, src, alt }) => {
        $(cssId).attr('alt', alt)
        $(cssId).fadeOut(40, function () {
            $(this).attr('src', src).fadeIn(100);
        })
    }

    const changeMode = ({ className, willAddClass, imgId, imgSrc, imgAlt }) => {
        updateStyles({ className, willAddClass });
        updateImg({ cssId: imgId, src: imgSrc, alt: imgAlt });
    }

    $(':button').on('click', (e) => {
        const modeName = e.target.id;
        if (modeName === 'dark') {
            changeMode({
                className: 'darkmode',
                willAddClass: true,
                imgId: '#darklight-img',
                imgSrc: 'moon.jpeg',
                imgAlt: 'cartoon moon',
            })
        } else if (modeName === 'light') {
            changeMode({
                className: 'darkmode',
                willAddClass: false,
                imgId: '#darklight-img',
                imgSrc: 'sun.jpeg',
                imgAlt: 'cartoon sun',
            })
        } else {
            console.log(`ERROR: ${modeName} mode not found`)
        }

    })
})