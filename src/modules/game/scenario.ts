import { GameScenario, GAME_STEP_TYPE } from "./types";

export const SCENARIO: GameScenario = {
    startStep: '1.1',
    steps: [
        {
            id: '0.1',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-1',
            nextStep: '1.1'
        },
        {
            id: '1.1',
            type:GAME_STEP_TYPE.PAGE,
            pageId: 'page-map',
            nextStep:'2.1',
        },
        {
            id: '2.1',
            type: GAME_STEP_TYPE.GEO_STEP,
            position: {
                lat: 50.45306, 
                lng:19.52706
                
            },
            name: ['Punkt geo 1'],
            nextStep: '2.2'
        },
        {
            id: '2.2',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-2', //quiz
            nextStep: '2.3'
        },
        {
            id: '2.3',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-4', //zepsute koło
            nextStep: '1.1'
        },
        {
            id:'3.1',
            type: GAME_STEP_TYPE.GEO_STEP,
            position: {
                lat: 50.45186, 
                lng: 19.61004
            },
            name: ["Punkt geo 2"],
            nextStep: '3.2'
        },
        {
            id: '3.2',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-3', //quiz
            nextStep: '3.3'
        },
        {
            id: '3.3',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-7', //bezpieczny kierowca
            nextStep: '1.1'
        },
        {
            id:'4.1',
            type: GAME_STEP_TYPE.GEO_STEP,
            position: {
                lat: 50.46338, 
                lng: 19.58613
            },
            name: ["Punkt geo 3"],
            nextStep: '4.2'
        },
        {
            id: '4.2',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-8', //quiz
            nextStep: '4.3'
        },
        {
            id: '4.3',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-9', //UWAŻAJ
            nextStep: '1.1'
        },
        {
            id:'5.1',
            type: GAME_STEP_TYPE.GEO_STEP,
            position: {
                lat: 50.44372, 
                lng: 19.54547,
            },
            name: ["Punkt geo 4"],
            nextStep: '5.2'
        },
        {
            id: '5.2',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-10',//quiz
            nextStep: '5.3'
        },
        {
            id: '5.3',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-11', //apteczka
            nextStep: '1.1'
        },
        {
            id:'6.1',
            type: GAME_STEP_TYPE.GEO_STEP,
            position: {
                lat: 50.45927, 
                lng: 19.65408
            },
            name: ["Punkt geo 5"],
            nextStep: '6.2'
        },
        {
            id: '6.2',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-12', //quiz
            nextStep: '6.3'
        },
        {
            id: '6.3',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-13', //agenci specjalni
            nextStep: '1.1'
        },
        {
            id:'7.1',
            type: GAME_STEP_TYPE.GEO_STEP,
            position: {
                lat: 50.45858, 
                lng: 19.55216
            },
            name: ["Punkt geo 6"],
            nextStep: '7.2'
        },
        {
            id: '7.2',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-14', //quiz
            nextStep: '7.3'
        },
        {
            id: '7.3',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-15', //OSZCZĘDZANIE
            nextStep: '1.1'
        },
        {
            id:'8.1',
            type: GAME_STEP_TYPE.GEO_STEP,
            position: {
                lat: 50.43769, 
                lng: 19.5763
            },
            name: ["Punkt geo 7"],
            nextStep: '8.2'
        },
        {
            id: '8.2',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-16', //quiz
            nextStep: '8.3'
        },
        {
            id: '8.3',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-6', //STABILNY TOR
            nextStep: '1.1'
        },
        {
            id:'9.1',
            type: GAME_STEP_TYPE.GEO_STEP,
            position: {
                lat: 50.42572, 
                lng: 19.6423
            },
            name: ["Punkt geo 8"],
            nextStep: '9.2'
        },
        {
            id: '9.2',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-18', //quiz
            nextStep: '9.3'
        },
        {
            id: '9.3',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-5', //kto ważniejszy
            nextStep: '1.1'
        },
        {
            id:'10.1',
            type: GAME_STEP_TYPE.GEO_STEP,
            position: {
                lat: 50.43047, 
                lng: 19.50891
            },
            name: ["Punkt geo 9"],
            nextStep: '10.2'
        },
        {
            id: '10.2',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-20', //quiz
            nextStep: '10.3'
        },
        {
            id: '10.3',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-21', //trening spostrzegawczości
            nextStep: '1.1'
        },
        {
            id:'11.1',
            type: GAME_STEP_TYPE.GEO_STEP,
            position: {
                lat: 50.4318,
                lng: 19.60869
            },
            name: ["Punkt geo 10"],
            nextStep: '11.2'
        },
        {
            id: '11.2',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-22', //quiz
            nextStep: '11.3'
        },
        {
            id: '11.3',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-23', //zarządzanie kryzysowe
            nextStep: '1.1'
        },
        {
            id:'12.1',
            type: GAME_STEP_TYPE.GEO_STEP,
            position: {
                lat: 50.46343,  
                lng: 19.49635
            },
            name: ["Punkt geo 11"],
            nextStep: '12.2'
        },
        {
            id: '12.2',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-24', //quiz
            nextStep: '12.3'
        },
        {
            id: '12.3',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-25', //antyradar
            nextStep: '1.1'
        },
        {
            id:'13.1',
            type: GAME_STEP_TYPE.GEO_STEP,
            position: {
                lat: 50.43602, 
                lng: 19.65269
            },
            name: ["Punkt geo 12"],
            nextStep: '13.2'
        },
        {
            id: '13.2',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-26', //quiz
            nextStep: '13.3'
        },
        {
            id: '13.3',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-27', //Wybieranie głosowe
            nextStep: '1.1'
        },
        {
            id: 'game-complete',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'game-complete',
            nextStep: '15.1'
        },
        {
            id: 'summary-page',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'summary-page',
            nextStep: null
        },
    ]
}
