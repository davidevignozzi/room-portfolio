export function handleResize(setScreenSize) {
    const width = window.innerWidth;
    let screenSize = '';

    switch (true) {
        case width < 1366:
            screenSize = 'ipad-vertical';
            break;
        case width >= 1366 && width < 1440:
            screenSize = 'ipad-horizontal';
            break;
        case width >= 1440 && width < 1920:
            screenSize = 'macbook-pro';
            break;
        case width >= 1920 && width < 2560:
            screenSize = 'mac-24';
            break;
        default:
            screenSize = 'mac-27';
            break;
    }

    setScreenSize(screenSize);
    // console.log('📱 => ', screenSize);
}
