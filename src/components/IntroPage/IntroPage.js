import React from 'react';
import { Steps } from 'intro.js-react';

const IntroPage = ({toggleSteps, onExit, stepsEnabled}) => {

    const introopt = {
        hideNext: false,
        exitOnOverlayClick: false,
        showStepNumbers: true,
        showBullets: false,
        disableInteraction: true,
        nextLabel: 'Selanjutnya',
        prevLabel: 'Sebelumnya',
        doneLabel: 'Selesai',
    }

    //const [exitOverlay, setExitOverlay] = useState(true);
    const initialStep = 0;
    const steps = [
        {
            element: ".inimenu",
            intro: "Pilih menu di sini"
        },
        {
            element: ".imenu1",
            intro: "Ini menu 1"
        },
        {
            element: ".imenu2",
            intro: "Ini menu 2"
        },
        {
            element: ".imenu3",
            intro: "Ini menu 3",
        },
        {
            element: ".imenu4",
            intro: "Ini menu 4",
        },
        {
            element: ".itabel",
            intro: "Ini Tabel",
            position: "bottom"
        },
        {
            element: ".ipass",
            intro: "Ini Kolom Password",
        },
        {
            element: ".iedit",
            intro: "Ini Edit",
        },
        {
            element: ".idelete",
            intro: "Ini Delete",
        },
        {
            element: ".itambah",
            intro: "Ini Tambah Data",
        },
        {
            element: ".ibutton1",
            intro: "Ini Button 1",
        },
        {
            element: ".ibutton2",
            intro: "Ini Button 2",
        },
        {
            element: ".ibantu",
            intro: "Klik untuk melihat bantuan!",
            position: 'right'
        }
    ];

    return (
        <div>
            <Steps
                enabled={stepsEnabled}
                steps={steps}
                initialStep={initialStep}
                onExit={onExit}
                options={introopt}
                toggleSteps={toggleSteps}
            />
        </div>
    )
}

export default IntroPage
