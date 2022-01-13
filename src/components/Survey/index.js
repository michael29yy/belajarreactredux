import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Layout } from 'antd';
import * as Survey from "survey-react";
import "survey-react/modern.min.css";

const Surveys = () => {
    const { Content } = Layout;
    const navigate = useNavigate();

    /* const [renang, setRenang] = useState(false);
    const [skydive, setSkydive] = useState(false);
    const [travel, setTravel] = useState(false); */

    /* const selValue = (params) => {
        var hobinya = params[0];
        if (hobinya === "Berenang") {
            setRenang(true);
        } else if (hobinya === "Sky Diving"){
            setSkydive(true);
        } else {
            setTravel(true);
        }
    } */

    const [listHobi] = useState([
        { id: 1, hobi: 'Berenang' },
        { id: 2, hobi: 'Sky Diving' },
        { id: 3, hobi: 'Traveling' }
    ]);

    const [lokasiBerenang] = useState([
        { id: 1, lokasi: 'Kolam Renang' },
        { id: 2, lokasi: 'Pantai' },
        { id: 3, lokasi: 'Sungai' }
    ]);

    const [lokasiSkyDiving] = useState([
        { id: 1, lokasi: 'Area 51' },
        { id: 2, lokasi: 'Asgard' },
        { id: 3, lokasi: 'Pesawat Thanos' }
    ]);

    const [lokasiTraveling] = useState([
        { id: 1, lokasi: 'Bekasi' },
        { id: 2, lokasi: 'Singapore' },
        { id: 3, lokasi: 'Thailand' }
    ]);

    /* const [waktuBerenang] = useState([
        { id: 1, waktu: 'Pagi' },
        { id: 2, waktu: 'Sore' },
    ]);

    const [waktuSkyDiving] = useState([
        { id: 1, waktu: 'Pagi' },
        { id: 2, waktu: 'Siang ' },
        { id: 3, waktu: 'Malam' }
    ]);

    const [waktuTraveling] = useState([
        { id: 1, waktu: 'Hari libur' },
        { id: 2, waktu: 'Hari kerja' },
        { id: 3, waktu: 'Setiap hari' }
    ]); */

    Survey.StylesManager.applyTheme("modern");
    const mySurvey = {
        title: "Halaman Survey Testing",
        pages: [
            {
                name: "page1",
                elements: [
                    {
                        type: "radiogroup",
                        name: "hobi",
                        title: "Apa hobi anda?",
                        isRequired: true,
                        choices: listHobi.map((hobi) => {
                            return (
                                { value: hobi.hobi, text: hobi.hobi }

                            )
                        }),
                        /* 
                        onchange: (hobi => {
                            setRenang(hobi)
                            console.log("Hobi : "+renang);
                        }) */
                    },
                    /* {
                        type: "radiogroup",
                        name: "lokasi",
                        visibleIf: '{hobi} notEmpty',
                        title: "Dimana anda {hobi}?",
                        isRequired: true,
                        choices: renang ? (
                            lokasiBerenang.map((lb) => {
                                return (
                                    { value: lb.lokasi, text: lb.lokasi }
                                )
                            })
                        ) : skydive ? (
                            lokasiSkyDiving.map((lsd) => {
                                return (
                                    { value: lsd.lokasi, text: lsd.lokasi }
                                )
                            })
                        ) : travel ? (
                            lokasiTraveling.map((lt) => {
                                return (
                                    { value: lt.lokasi, text: lt.lokasi }
                                )
                            })
                        ) : (
                            null
                        )
                    }, */
                    //lvl 2
                    {
                        type: "radiogroup",
                        name: "lokasi_renang",
                        visibleIf: "{hobi} = 'Berenang'",
                        title: "Dimana anda {hobi}?",
                        isRequired: true,
                        choices: lokasiBerenang.map((lb) => {
                            return (
                                { value: lb.lokasi, text: lb.lokasi }
                            )
                        })
                    },
                    {
                        type: "radiogroup",
                        name: "lokasi_skydiving",
                        visibleIf: "{hobi} = 'Sky Diving'",
                        title: "Dimana anda {hobi}?",
                        isRequired: true,
                        choices: lokasiSkyDiving.map((lsd) => {
                            return (
                                { value: lsd.lokasi, text: lsd.lokasi }
                            )
                        })
                    },
                    {
                        type: "radiogroup",
                        name: "lokasi_traveling",
                        visibleIf: "{hobi} = 'Traveling'",
                        title: "Kemana anda {hobi}?",
                        isRequired: true,
                        choices: lokasiTraveling.map((lt) => {
                            return (
                                { value: lt.lokasi, text: lt.lokasi }
                            )
                        })
                    },
                    //lvl 3
                    /* {
                        type: "radiogroup",
                        name: "waktu_renang",
                        visibleIf: "{lokasi_renang} notEmpty",
                        title: "Kapan anda {hobi}?",
                        isRequired: true,
                        choices: waktuBerenang.map((wb) => {
                            return (
                                { value: wb.waktu, text: wb.waktu }
                            )
                        })
                    },
                    {
                        type: "radiogroup",
                        name: "waktu_skydiving",
                        visibleIf: "{lokasi_skydiving} notEmpty",
                        title: "Kapan anda {hobi}?",
                        isRequired: true,
                        choices: waktuSkyDiving.map((wsd) => {
                            return (
                                { value: wsd.waktu, text: wsd.waktu }
                            )
                        })
                    },
                    {
                        type: "radiogroup",
                        name: "waktu_traveling",
                        visibleIf: "{lokasi_traveling} notEmpty",
                        title: "Kapan anda {hobi}?",
                        isRequired: true,
                        choices: waktuTraveling.map((wt) => {
                            return (
                                { value: wt.waktu, text: wt.waktu }
                            )
                        })
                    }, */
                    {
                        type: "radiogroup",
                        name: "menyukai",
                        visibleIf: "{lokasi_renang} notempty or {lokasi_skydiving} notempty or {lokasi_traveling} notempty",
                        title: "Apakah anda menyukai hobi anda? ",
                        isRequired: true,
                        choices: ["Ya", "Tidak"]
                    }
                ]
            }
        ],
        /* triggers: [
            {
                type: "runexpression",
                expression: "{hobi} notempty or {hobi} empty",
                runExpression: "selValue({hobi}, 'lokasi')"
            }
        ] */
    };
    const survey = new Survey.Model(mySurvey);

    return (
        <Content className='konten'>
            <div>
                <Survey.Survey
                    model={survey}
                    onComplete={(data) => {
                        console.log(data.valuesHash);
                        navigate('/halaman2')
                    }}
                />
            </div>
            <Link style={{ marginLeft: "94px" }} className='btn btn-warning' to={"/"}>Kembali</Link>
        </Content>
    )
}

export default Surveys
