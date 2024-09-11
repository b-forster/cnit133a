$(function () {
    const updateStyles = ({ selector = 'body', className, willAddClass }) => {
        willAddClass ?
            $(selector).addClass(className) :
            $(selector).removeClass(className);
    }

    const updateImg = ({ cssId, src, alt }) => {
        $(cssId).attr({ src, alt });
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