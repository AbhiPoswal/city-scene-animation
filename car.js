$(window).on("load", function() {

    var tl = new TimelineMax({repeat:-1});
    tl.to("#building", {
        duration:22,
        backgroundPosition: "5600px 0px",
        //autoRound:false,
        ease: "linear"
    });
    

    var rl = new TimelineMax({repeat:-1});
    rl.to("#road", {
        duration:22,
        backgroundPosition: "5600px 0px",
        //autoRound:false,
        ease: "linear"
    });

});

gsap.to('#car',{
    y:20,
    duration:2,
    repeat:-1,
    yoyo:true,
    ease:'linear'
})
    
gsap.to('#tyre_1',{
    rotate:-360,
    duration:1,
    repeat:-1,
    ease:'linear'
})

gsap.to('#tyre_2',{
    rotate:-360,
    duration:1,
    repeat:-1,
    ease:'linear'
})

gsap.to('#tyre_1',{
    y:20,
    duration:2,
    repeat:-1,
    yoyo:true,
    ease:'linear'
})

gsap.to('#tyre_2',{
    y:20,
    duration:2,
    repeat:-1,
    yoyo:true,
    ease:'linear'
})

// truck starts from here

gsap.to('#truck',{
    y:-20,
    duration:2,
    repeat:-1,
    yoyo:true,
    ease:'linear'
})

gsap.to('h2',{
    y:-20,
    duration:2,
    repeat:-1,
    yoyo:true,
    ease:'linear'
})
    
gsap.to('#truck_tyre_1',{
    rotate:-360,
    duration:.8,
    repeat:-1,
    ease:'linear'
})

gsap.to('#truck_tyre_2',{
    rotate:-360,
    duration:.8,
    repeat:-1,
    ease:'linear'
})

gsap.to('#truck_tyre_1',{
    y:-20,
    duration:2,
    repeat:-1,
    yoyo:true,
    ease:'linear'
})

gsap.to('#truck_tyre_2',{
    y:-20,
    duration:2,
    repeat:-1,
    yoyo:true,
    ease:'linear'
})

// truck is overtaking the car

gsap.to('#truck',{
    x:-720,
    duration:8,
    delay:2,
    repeatDelay:20,
    repeat:-1,
    ease:"linear"
})

gsap.to('h2',{
    x:-720,
    duration:8,
    delay:2,
    repeatDelay:20,
    repeat:-1,
    ease:"linear"
})

gsap.to('#truck_tyre_1',{
    x:-720,
    duration:8,
    delay:2,
    repeatDelay:20,
    repeat:-1,
    ease:"linear"
})

gsap.to('#truck_tyre_2',{
    x:-720,
    duration:8,
    delay:2,
    repeatDelay:20,
    repeat:-1,
    ease:"linear"
})

// truck moving back to its position

gsap.to('#truck',{
    x:20,
    duration:8,
    delay:15,
    repeatDelay:20,
    repeat:-1,
    ease:"linear"
})

gsap.to('h2',{
    x:20,
    duration:8,
    delay:15,
    repeatDelay:20,
    repeat:-1,
    ease:"linear"
})

gsap.to('#truck_tyre_1',{
    x:20,
    duration:8,
    delay:15,
    repeatDelay:20,
    repeat:-1,
    ease:"linear"
})

gsap.to('#truck_tyre_2',{
    x:20,
    duration:8,
    delay:15,
    repeatDelay:20,
    repeat:-1,
    ease:"linear"
})

// bike starts from here

gsap.to('#bike_tyre_1',{
    rotate:-360,
    duration:.5,
    repeat:-1,
    ease:"linear"
})

gsap.to('#bike_tyre_2',{
    rotate:-360,
    duration:.5,
    repeat:-1,
    ease:"linear"
})

// snowfall starts from here

// snow block 1 strts from here

gsap.from('#snow_1',{
    y:-820,
    duration:10,
    repeat:-1,
    delay:1,
    ease:"linear"
})

gsap.from('#snow_2',{
    y:-820,
    duration:9,
    repeat:-1,
    ease:"linear"
})

gsap.from('#snow_3',{
    y:-820,
    duration:9.5,
    repeat:-1,
    delay:.5,
    ease:"linear"
})

gsap.from('#snow_4',{
    y:-820,
    duration:10,
    repeat:-1,
    delay:1,
    ease:"linear"
})

gsap.from('#snow_5',{
    y:-820,
    duration:10,
    repeat:-1,
    delay:1,
    ease:"linear"
})

gsap.from('#snow_6',{
    y:-820,
    duration:9.3,
    repeat:-1,
    delay:.3,
    ease:"linear"
})

gsap.from('#snow_7',{
    y:-820,
    duration:9.5,
    repeat:-1,
    delay:.5,
    ease:"linear"
})

gsap.from('#snow_8',{
    y:-820,
    duration:9.9,
    repeat:-1,
    delay:.9,
    ease:"linear"
})

gsap.from('#snow_9',{
    y:-820,
    duration:9.3,
    repeat:-1,
    delay:.3,
    ease:"linear"
})

gsap.from('#snow_10',{
    y:-820,
    duration:9.3,
    repeat:-1,
    delay:.3,
    ease:"linear"
})

gsap.from('#snow_11',{
    y:-820,
    duration:10,
    repeat:-1,
    delay:1,
    ease:"linear"
})

gsap.from('#snow_12',{
    y:-820,
    duration:9.2,
    repeat:-1,
    delay:.2,
    ease:"linear"
})

gsap.from('#snow_13',{
    y:-820,
    duration:9.7,
    repeat:-1,
    delay:.7,
    ease:"linear"
})

gsap.from('#snow_14',{
    y:-820,
    duration:9.7,
    repeat:-1,
    delay:.7,
    ease:"linear"
})

gsap.from('#snow_15',{
    y:-820,
    duration:9.3,
    repeat:-1,
    delay:.3,
    ease:"linear"
})

gsap.from('#snow_16',{
    y:-820,
    duration:10,
    repeat:-1,
    delay:1,
    ease:"linear"
})

gsap.from('#snow_17',{
    y:-820,
    duration:9.4,
    repeat:-1,
    delay:.4,
    ease:"linear"
})

gsap.from('#snow_18',{
    y:-820,
    duration:9.3,
    repeat:-1,
    delay:.3,
    ease:"linear"
})

gsap.from('#snow_19',{
    y:-820,
    duration:9.2,
    repeat:-1,
    delay:.2,
    ease:"linear"
})

gsap.from('#snow_20',{
    y:-820,
    duration:9.4,
    repeat:-1,
    delay:.4,
    ease:"linear"
})

gsap.from('#snow_21',{
    y:-820,
    duration:10,
    repeat:-1,
    delay:1,
    ease:"linear"
})

gsap.from('#snow_22',{
    y:-820,
    duration:9.2,
    repeat:-1,
    delay:.2,
    ease:"linear"
})

gsap.from('#snow_23',{
    y:-820,
    duration:9.8,
    repeat:-1,
    delay:.8,
    ease:"linear"
})

gsap.from('#snow_24',{
    y:-820,
    duration:9.2,
    repeat:-1,
    delay:.2,
    ease:"linear"
})

gsap.from('#snow_25',{
    y:-820,
    duration:9.8,
    repeat:-1,
    delay:.8,
    ease:"linear"
})

gsap.from('#snow_26',{
    y:-820,
    duration:9.3,
    repeat:-1,
    delay:.3,
    ease:"linear"
})

gsap.from('#snow_27',{
    y:-820,
    duration:9.8,
    repeat:-1,
    delay:.8,
    ease:"linear"
})

gsap.from('#snow_28',{
    y:-820,
    duration:9.7,
    repeat:-1,
    delay:.7,
    ease:"linear"
})

gsap.from('#snow_29',{
    y:-820,
    duration:9.5,
    repeat:-1,
    delay:.5,
    ease:"linear"
})

gsap.from('#snow_30',{
    y:-820,
    duration:9.3,
    repeat:-1,
    delay:.3,
    ease:"linear"
})

gsap.from('#snow_31',{
    y:-820,
    duration:10,
    repeat:-1,
    delay:1,
    ease:"linear"
})

gsap.from('#snow_32',{
    y:-820,
    duration:9.2,
    repeat:-1,
    delay:.2,
    ease:"linear"
})

gsap.from('#snow_33',{
    y:-820,
    duration:9.2,
    repeat:-1,
    delay:.2,
    ease:"linear"
})

gsap.from('#snow_34',{
    y:-820,
    duration:9.8,
    repeat:-1,
    delay:.8,
    ease:"linear"
})

gsap.from('#snow_35',{
    y:-820,
    duration:9.8,
    repeat:-1,
    delay:.8,
    ease:"linear"
})

gsap.from('#snow_36',{
    y:-820,
    duration:9.5,
    repeat:-1,
    delay:.5,
    ease:"linear"
})

gsap.from('#snow_37',{
    y:-820,
    duration:9.4,
    repeat:-1,
    delay:.4,
    ease:"linear"
})

gsap.from('#snow_38',{
    y:-820,
    duration:9.6,
    repeat:-1,
    delay:.6,
    ease:"linear"
})

gsap.from('#snow_39',{
    y:-820,
    duration:9.7,
    repeat:-1,
    delay:.7,
    ease:"linear"
})

gsap.from('#snow_40',{
    y:-820,
    duration:9.1,
    repeat:-1,
    delay:.1,
    ease:"linear"
})

gsap.from('#snow_41',{
    y:-820,
    duration:9.9,
    repeat:-1,
    delay:.9,
    ease:"linear"
})

gsap.from('#snow_42',{
    y:-820,
    duration:9.3,
    repeat:-1,
    delay:.3,
    ease:"linear"
})

gsap.from('#snow_43',{
    y:-820,
    duration:9.6,
    repeat:-1,
    delay:.6,
    ease:"linear"
})

gsap.from('#snow_44',{
    y:-820,
    duration:9.4,
    repeat:-1,
    delay:.4,
    ease:"linear"
})

gsap.from('#snow_45',{
    y:-820,
    duration:9.8,
    repeat:-1,
    delay:.8,
    ease:"linear"
})

gsap.from('#snow_46',{
    y:-820,
    duration:9.5,
    repeat:-1,
    delay:5,
    ease:"linear"
})

gsap.from('#snow_47',{
    y:-820,
    duration:9.1,
    repeat:-1,
    delay:.1,
    ease:"linear"
})

gsap.from('#snow_48',{
    y:-820,
    duration:9.7,
    repeat:-1,
    delay:.7,
    ease:"linear"
})

gsap.from('#snow_49',{
    y:-820,
    duration:9.2,
    repeat:-1,
    delay:.2,
    ease:"linear"
})

gsap.from('#snow_50',{
    y:-820,
    duration:9.5,
    repeat:-1,
    delay:5,
    ease:"linear"
})

gsap.from('#snow_51',{
    y:-820,
    duration:10,
    repeat:-1,
    delay:1,
    ease:"linear"
})

gsap.from('#snow_52',{
    y:-820,
    duration:10,
    repeat:-1,
    delay:1,
    ease:"linear"
})

gsap.from('#snow_53',{
    y:-820,
    duration:9.2,
    repeat:-1,
    delay:.2,
    ease:"linear"
})

gsap.from('#snow_54',{
    y:-820,
    duration:10,
    repeat:-1,
    delay:1,
    ease:"linear"
})

gsap.from('#snow_55',{
    y:-820,
    duration:9.7,
    repeat:-1,
    delay:.7,
    ease:"linear"
})

gsap.from('#snow_56',{
    y:-820,
    duration:9,
    repeat:-1,
    ease:"linear"
})

gsap.from('#snow_57',{
    y:-820,
    duration:9.9,
    repeat:-1,
    delay:.9,
    ease:"linear"
})

gsap.from('#snow_58',{
    y:-820,
    duration:9.4,
    repeat:-1,
    delay:2.4,
    ease:"linear"
})

gsap.from('#snow_59',{
    y:-820,
    duration:9.3,
    repeat:-1,
    delay:.3,
    ease:"linear"
})

gsap.from('#snow_60',{
    y:-820,
    duration:10,
    repeat:-1,
    delay:1,
    ease:"linear"
})

// snow block 2 starts from here

gsap.from('#snow_61',{
    y:-820,
    duration:10.3,
    repeat:-1,
    delay:1.3,
    ease:"linear"
})

gsap.from('#snow_62',{
    y:-820,
    duration:11,
    repeat:-1,
    delay:2,
    ease:"linear"
})

gsap.from('#snow_63',{
    y:-820,
    duration:10.4,
    repeat:-1,
    delay:1.4,
    ease:"linear"
})

gsap.from('#snow_64',{
    y:-820,
    duration:10.9,
    repeat:-1,
    delay:1.9,
    ease:"linear"
})

gsap.from('#snow_65',{
    y:-820,
    duration:10.3,
    repeat:-1,
    delay:1.3,
    ease:"linear"
})

gsap.from('#snow_66',{
    y:-820,
    duration:11,
    repeat:-1,
    delay:2,
    ease:"linear"
})

gsap.from('#snow_67',{
    y:-820,
    duration:10.6,
    repeat:-1,
    delay:1.6,
    ease:"linear"
})

gsap.from('#snow_68',{
    y:-820,
    duration:10.1,
    repeat:-1,
    delay:1.1,
    ease:"linear"
})

gsap.from('#snow_69',{
    y:-820,
    duration:10.8,
    repeat:-1,
    delay:1.8,
    ease:"linear"
})

gsap.from('#snow_70',{
    y:-820,
    duration:10.3,
    repeat:-1,
    delay:1.3,
    ease:"linear"
})

gsap.from('#snow_71',{
    y:-820,
    duration:10.9,
    repeat:-1,
    delay:1.9,
    ease:"linear"
})

gsap.from('#snow_72',{
    y:-820,
    duration:10.7,
    repeat:-1,
    delay:1.7,
    ease:"linear"
})

gsap.from('#snow_73',{
    y:-820,
    duration:10.4,
    repeat:-1,
    delay:1.4,
    ease:"linear"
})

gsap.from('#snow_74',{
    y:-820,
    duration:11,
    repeat:-1,
    delay:2,
    ease:"linear"
})

gsap.from('#snow_75',{
    y:-820,
    duration:10.7,
    repeat:-1,
    delay:1.7,
    ease:"linear"
})

gsap.from('#snow_76',{
    y:-820,
    duration:10.9,
    repeat:-1,
    delay:1.9,
    ease:"linear"
})

gsap.from('#snow_77',{
    y:-820,
    duration:10.5,
    repeat:-1,
    delay:1.5,
    ease:"linear"
})

gsap.from('#snow_78',{
    y:-820,
    duration:10.8,
    repeat:-1,
    delay:1.8,
    ease:"linear"
})

gsap.from('#snow_79',{
    y:-820,
    duration:10.1,
    repeat:-1,
    delay:1.1,
    ease:"linear"
})

gsap.from('#snow_80',{
    y:-820,
    duration:10.7,
    repeat:-1,
    delay:1.7,
    ease:"linear"
})

gsap.from('#snow_81',{
    y:-820,
    duration:10.6,
    repeat:-1,
    delay:1.6,
    ease:"linear"
})

gsap.from('#snow_82',{
    y:-820,
    duration:10.2,
    repeat:-1,
    delay:1.2,
    ease:"linear"
})

gsap.from('#snow_83',{
    y:-820,
    duration:10.5,
    repeat:-1,
    delay:1.5,
    ease:"linear"
})

gsap.from('#snow_84',{
    y:-820,
    duration:10.7,
    repeat:-1,
    delay:1.7,
    ease:"linear"
})

gsap.from('#snow_85',{
    y:-820,
    duration:10.4,
    repeat:-1,
    delay:1.4,
    ease:"linear"
})

gsap.from('#snow_86',{
    y:-820,
    duration:10.9,
    repeat:-1,
    delay:1.9,
    ease:"linear"
})

gsap.from('#snow_87',{
    y:-820,
    duration:11,
    repeat:-1,
    delay:2,
    ease:"linear"
})

gsap.from('#snow_88',{
    y:-820,
    duration:10.6,
    repeat:-1,
    delay:1.6,
    ease:"linear"
})

gsap.from('#snow_89',{
    y:-820,
    duration:10.9,
    repeat:-1,
    delay:1.9,
    ease:"linear"
})

gsap.from('#snow_90',{
    y:-820,
    duration:10.1,
    repeat:-1,
    delay:1.1,
    ease:"linear"
})

gsap.from('#snow_91',{
    y:-820,
    duration:10.5,
    repeat:-1,
    delay:1.5,
    ease:"linear"
})

gsap.from('#snow_92',{
    y:-820,
    duration:10.2,
    repeat:-1,
    delay:1.2,
    ease:"linear"
})

gsap.from('#snow_93',{
    y:-820,
    duration:10.8,
    repeat:-1,
    delay:1.8,
    ease:"linear"
})

gsap.from('#snow_94',{
    y:-820,
    duration:10.6,
    repeat:-1,
    delay:1.6,
    ease:"linear"
})

gsap.from('#snow_95',{
    y:-820,
    duration:11,
    repeat:-1,
    delay:2,
    ease:"linear"
})

gsap.from('#snow_96',{
    y:-820,
    duration:10.9,
    repeat:-1,
    delay:1.9,
    ease:"linear"
})

gsap.from('#snow_97',{
    y:-820,
    duration:10.4,
    repeat:-1,
    delay:1.4,
    ease:"linear"
})

gsap.from('#snow_98',{
    y:-820,
    duration:11,
    repeat:-1,
    delay:2,
    ease:"linear"
})

gsap.from('#snow_99',{
    y:-820,
    duration:10.3,
    repeat:-1,
    delay:1.3,
    ease:"linear"
})

gsap.from('#snow_100',{
    y:-820,
    duration:10.6,
    repeat:-1,
    delay:1.6,
    ease:"linear"
})

gsap.from('#snow_101',{
    y:-820,
    duration:11,
    repeat:-1,
    delay:2,
    ease:"linear"
})

gsap.from('#snow_102',{
    y:-820,
    duration:10.5,
    repeat:-1,
    delay:1.5,
    ease:"linear"
})

gsap.from('#snow_103',{
    y:-820,
    duration:10.9,
    repeat:-1,
    delay:1.9,
    ease:"linear"
})

gsap.from('#snow_104',{
    y:-820,
    duration:10.4,
    repeat:-1,
    delay:1.4,
    ease:"linear"
})

gsap.from('#snow_105',{
    y:-820,
    duration:10.1,
    repeat:-1,
    delay:1.1,
    ease:"linear"
})

gsap.from('#snow_106',{
    y:-820,
    duration:10.8,
    repeat:-1,
    delay:1.8,
    ease:"linear"
})

gsap.from('#snow_107',{
    y:-820,
    duration:10.2,
    repeat:-1,
    delay:1.2,
    ease:"linear"
})

gsap.from('#snow_108',{
    y:-820,
    duration:10.9,
    repeat:-1,
    delay:1.9,
    ease:"linear"
})

gsap.from('#snow_109',{
    y:-820,
    duration:10.2,
    repeat:-1,
    delay:1.2,
    ease:"linear"
})

gsap.from('#snow_110',{
    y:-820,
    duration:10.7,
    repeat:-1,
    delay:1.7,
    ease:"linear"
})

gsap.from('#snow_111',{
    y:-820,
    duration:10.3,
    repeat:-1,
    delay:1.3,
    ease:"linear"
})

gsap.from('#snow_112',{
    y:-820,
    duration:11,
    repeat:-1,
    delay:2,
    ease:"linear"
})

gsap.from('#snow_113',{
    y:-820,
    duration:10.6,
    repeat:-1,
    delay:1.6,
    ease:"linear"
})

gsap.from('#snow_114',{
    y:-820,
    duration:10.7,
    repeat:-1,
    delay:1.7,
    ease:"linear"
})

gsap.from('#snow_115',{
    y:-820,
    duration:10.9,
    repeat:-1,
    delay:1.9,
    ease:"linear"
})

gsap.from('#snow_116',{
    y:-820,
    duration:10.5,
    repeat:-1,
    delay:1.5,
    ease:"linear"
})

gsap.from('#snow_117',{
    y:-820,
    duration:10.8,
    repeat:-1,
    delay:1.8,
    ease:"linear"
})

gsap.from('#snow_118',{
    y:-820,
    duration:10.1,
    repeat:-1,
    delay:1.1,
    ease:"linear"
})

gsap.from('#snow_119',{
    y:-820,
    duration:11,
    repeat:-1,
    delay:2,
    ease:"linear"
})

gsap.from('#snow_120',{
    y:-820,
    duration:10.4,
    repeat:-1,
    delay:1.4,
    ease:"linear"
})

// snow block 3 starts from here 

gsap.from('#snow_121',{
    y:-820,
    duration:11.9,
    repeat:-1,
    delay:2.9,
    ease:"linear"
})

gsap.from('#snow_122',{
    y:-820,
    duration:11.3,
    repeat:-1,
    delay:2.3,
    ease:"linear"
})

gsap.from('#snow_123',{
    y:-820,
    duration:11.7,
    repeat:-1,
    delay:2.7,
    ease:"linear"
})

gsap.from('#snow_124',{
    y:-820,
    duration:11.1,
    repeat:-1,
    delay:2.1,
    ease:"linear"
})

gsap.from('#snow_125',{
    y:-820,
    duration:11.6,
    repeat:-1,
    delay:2.6,
    ease:"linear"
})

gsap.from('#snow_126',{
    y:-820,
    duration:12,
    repeat:-1,
    delay:3,
    ease:"linear"
})

gsap.from('#snow_127',{
    y:-820,
    duration:11.4,
    repeat:-1,
    delay:2.4,
    ease:"linear"
})

gsap.from('#snow_128',{
    y:-820,
    duration:11.8,
    repeat:-1,
    delay:2.8,
    ease:"linear"
})

gsap.from('#snow_129',{
    y:-820,
    duration:11.3,
    repeat:-1,
    delay:2.3,
    ease:"linear"
})

gsap.from('#snow_130',{
    y:-820,
    duration:11.2,
    repeat:-1,
    delay:2.2,
    ease:"linear"
})

gsap.from('#snow_131',{
    y:-820,
    duration:11.9,
    repeat:-1,
    delay:2.9,
    ease:"linear"
})

gsap.from('#snow_132',{
    y:-820,
    duration:11.1,
    repeat:-1,
    delay:2.1,
    ease:"linear"
})

gsap.from('#snow_133',{
    y:-820,
    duration:11.6,
    repeat:-1,
    delay:2.6,
    ease:"linear"
})

gsap.from('#snow_134',{
    y:-820,
    duration:11.2,
    repeat:-1,
    delay:2.2,
    ease:"linear"
})

gsap.from('#snow_135',{
    y:-820,
    duration:11.1,
    repeat:-1,
    delay:2.1,
    ease:"linear"
})

gsap.from('#snow_136',{
    y:-820,
    duration:12,
    repeat:-1,
    delay:3,
    ease:"linear"
})

gsap.from('#snow_137',{
    y:-820,
    duration:11.9,
    repeat:-1,
    delay:2.9,
    ease:"linear"
})

gsap.from('#snow_138',{
    y:-820,
    duration:11.3,
    repeat:-1,
    delay:2.3,
    ease:"linear"
})

gsap.from('#snow_139',{
    y:-820,
    duration:12,
    repeat:-1,
    delay:3,
    ease:"linear"
})

gsap.from('#snow_140',{
    y:-820,
    duration:11.7,
    repeat:-1,
    delay:2.7,
    ease:"linear"
})

gsap.from('#snow_141',{
    y:-820,
    duration:11.4,
    repeat:-1,
    delay:2.4,
    ease:"linear"
})

gsap.from('#snow_142',{
    y:-820,
    duration:11.8,
    repeat:-1,
    delay:2.8,
    ease:"linear"
})

gsap.from('#snow_143',{
    y:-820,
    duration:11.3,
    repeat:-1,
    delay:2.3,
    ease:"linear"
})

gsap.from('#snow_144',{
    y:-820,
    duration:12,
    repeat:-1,
    delay:3,
    ease:"linear"
})

gsap.from('#snow_145',{
    y:-820,
    duration:11.2,
    repeat:-1,
    delay:2.2,
    ease:"linear"
})

gsap.from('#snow_146',{
    y:-820,
    duration:11.5,
    repeat:-1,
    delay:2.5,
    ease:"linear"
})

gsap.from('#snow_147',{
    y:-820,
    duration:11.9,
    repeat:-1,
    delay:2.9,
    ease:"linear"
})

gsap.from('#snow_148',{
    y:-820,
    duration:11.6,
    repeat:-1,
    delay:2.6,
    ease:"linear"
})

gsap.from('#snow_149',{
    y:-820,
    duration:11.3,
    repeat:-1,
    delay:2.3,
    ease:"linear"
})

gsap.from('#snow_150',{
    y:-820,
    duration:11.9,
    repeat:-1,
    delay:2.9,
    ease:"linear"
})

gsap.from('#snow_151',{
    y:-820,
    duration:12,
    repeat:-1,
    delay:3,
    ease:"linear"
})

gsap.from('#snow_152',{
    y:-820,
    duration:11.6,
    repeat:-1,
    delay:2.6,
    ease:"linear"
})

gsap.from('#snow_153',{
    y:-820,
    duration:11.9,
    repeat:-1,
    delay:2.9,
    ease:"linear"
})

gsap.from('#snow_154',{
    y:-820,
    duration:11.4,
    repeat:-1,
    delay:2.4,
    ease:"linear"
})

gsap.from('#snow_155',{
    y:-820,
    duration:11.1,
    repeat:-1,
    delay:2.1,
    ease:"linear"
})

gsap.from('#snow_156',{
    y:-820,
    duration:11.7,
    repeat:-1,
    delay:2.7,
    ease:"linear"
})

gsap.from('#snow_157',{
    y:-820,
    duration:12,
    repeat:-1,
    delay:3,
    ease:"linear"
})

gsap.from('#snow_158',{
    y:-820,
    duration:11.9,
    repeat:-1,
    delay:2.9,
    ease:"linear"
})

gsap.from('#snow_159',{
    y:-820,
    duration:11.2,
    repeat:-1,
    delay:2.2,
    ease:"linear"
})

gsap.from('#snow_160',{
    y:-820,
    duration:11.8,
    repeat:-1,
    delay:2.8,
    ease:"linear"
})

gsap.from('#snow_161',{
    y:-820,
    duration:11.5,
    repeat:-1,
    delay:2.5,
    ease:"linear"
})

gsap.from('#snow_162',{
    y:-820,
    duration:11.1,
    repeat:-1,
    delay:2.1,
    ease:"linear"
})

gsap.from('#snow_163',{
    y:-820,
    duration:11.3,
    repeat:-1,
    delay:2.3,
    ease:"linear"
})

gsap.from('#snow_164',{
    y:-820,
    duration:11.7,
    repeat:-1,
    delay:2.7,
    ease:"linear"
})

gsap.from('#snow_165',{
    y:-820,
    duration:11.2,
    repeat:-1,
    delay:2.2,
    ease:"linear"
})

gsap.from('#snow_166',{
    y:-820,
    duration:11.9,
    repeat:-1,
    delay:2.9,
    ease:"linear"
})

gsap.from('#snow_167',{
    y:-820,
    duration:11.7,
    repeat:-1,
    delay:2.7,
    ease:"linear"
})

gsap.from('#snow_168',{
    y:-820,
    duration:11.4,
    repeat:-1,
    delay:2.4,
    ease:"linear"
})

gsap.from('#snow_169',{
    y:-820,
    duration:11.5,
    repeat:-1,
    delay:2.5,
    ease:"linear"
})


gsap.from('#snow_170',{
    y:-820,
    duration:11.9,
    repeat:-1,
    delay:2.9,
    ease:"linear"
})

gsap.from('#snow_171',{
    y:-820,
    duration:12,
    repeat:-1,
    delay:3,
    ease:"linear"
})

gsap.from('#snow_172',{
    y:-820,
    duration:11.6,
    repeat:-1,
    delay:2.6,
    ease:"linear"
})

gsap.from('#snow_173',{
    y:-820,
    duration:11.3,
    repeat:-1,
    delay:2.3,
    ease:"linear"
})

gsap.from('#snow_174',{
    y:-820,
    duration:11.8,
    repeat:-1,
    delay:2.8,
    ease:"linear"
})

gsap.from('#snow_175',{
    y:-820,
    duration:11.7,
    repeat:-1,
    delay:2.7,
    ease:"linear"
})

gsap.from('#snow_176',{
    y:-820,
    duration:12,
    repeat:-1,
    delay:3,
    ease:"linear"
})

gsap.from('#snow_177',{
    y:-820,
    duration:11.6,
    repeat:-1,
    delay:2.6,
    ease:"linear"
})

gsap.from('#snow_178',{
    y:-820,
    duration:11.1,
    repeat:-1,
    delay:2.1,
    ease:"linear"
})

gsap.from('#snow_179',{
    y:-820,
    duration:11.5,
    repeat:-1,
    delay:2.5,
    ease:"linear"
})

gsap.from('#snow_180',{
    y:-820,
    duration:11.3,
    repeat:-1,
    delay:2.3,
    ease:"linear"
})

// snow on the road starts from here

// snow block 4 strts from here

gsap.from('#snow_181',{
    opacity:0,
    delay:11,
})

gsap.to('#snow_181',{
    delay:16,
    scale: 4.5,
})

gsap.from('#snow_182',{
    opacity:0,
    delay:10,
})

gsap.to('#snow_182',{
    delay:15,
    scale: 4.5,
})

gsap.from('#snow_183',{
    opacity:0,
    delay:10.5,
})

gsap.to('#snow_183',{
    delay:15.5,
    scale: 4.5,
})

gsap.from('#snow_184',{
    opacity:0,
    delay:11,
})

gsap.to('#snow_184',{
    delay:16,
    scale: 4.5,
})

gsap.from('#snow_185',{
    opacity:0,
    delay:11,
})

gsap.to('#snow_185',{
    delay:16,
    scale: 4.5,
})

gsap.from('#snow_186',{
    opacity:0,
    delay:10.3,
})

gsap.to('#snow_186',{
    delay:15.3,
    scale: 4.5,
})

gsap.from('#snow_187',{
    opacity:0,
    delay:10.5,
})

gsap.to('#snow_187',{
    delay:15.5,
    scale: 4.5,
})

gsap.from('#snow_188',{
    opacity:0,
    delay:10.9,
})

gsap.to('#snow_188',{
    delay:15.9,
    scale: 4.5,
})

gsap.from('#snow_189',{
    opacity:0,
    delay:10.3,
})

gsap.to('#snow_189',{
    delay:15.3,
    scale: 4.5,
})

gsap.from('#snow_190',{
    opacity:0,
    delay:10.3,
})

gsap.to('#snow_190',{
    delay:15.3,
    scale: 4.5,
})

gsap.from('#snow_191',{
    opacity:0,
    delay:11,
})

gsap.to('#snow_191',{
    delay:16,
    scale: 4.5,
})

gsap.from('#snow_192',{
    opacity:0,
    delay:9.4,
})

gsap.to('#snow_192',{
    delay:14.4,
    scale: 4.5,
})

gsap.from('#snow_193',{
    opacity:0,
    delay:10.4,
})

gsap.to('#snow_193',{
    delay:15.4,
    scale: 4.5,
})

gsap.from('#snow_194',{
    opacity:0,
    delay:10.4,
})

gsap.to('#snow_194',{
    delay:15.4,
    scale: 4.5,
})

gsap.from('#snow_195',{
    opacity:0,
    delay:9.6,
})

gsap.to('#snow_195',{
    delay:14.6,
    scale: 4.5,
})

gsap.from('#snow_196',{
    opacity:0,
    delay:11,
})

gsap.to('#snow_196',{
    delay:16,
    scale: 4.5,
})

gsap.from('#snow_197',{
    opacity:0,
    delay:9.8,
})

gsap.to('#snow_197',{
    delay:14.8,
    scale: 4.5,
})

gsap.from('#snow_198',{
    opacity:0,
    delay:9.6,
})

gsap.to('#snow_198',{
    delay:14.6,
    scale: 4.5,
})

gsap.from('#snow_199',{
    opacity:0,
    delay:9.4,
})

gsap.to('#snow_199',{
    delay:14.4,
    scale: 4.5,
})

gsap.from('#snow_200',{
    opacity:0,
    delay:9.8,
})

gsap.to('#snow_200',{
    delay:14.8,
    scale: 4.5,
})

gsap.from('#snow_201',{
    opacity:0,
    delay:11,
})

gsap.to('#snow_201',{
    delay:16,
    scale: 4.5,
})

gsap.from('#snow_202',{
    opacity:0,
    delay:9.4,
})

gsap.to('#snow_202',{
    delay:15.4,
    scale: 4.5,
})

gsap.from('#snow_203',{
    opacity:0,
    delay:10.6,
})

gsap.to('#snow_203',{
    delay:15.6,
    scale: 4.5,
})

gsap.from('#snow_204',{
    opacity:0,
    delay:9.4,
})

gsap.to('#snow_204',{
    delay:14.4,
    scale: 4.5,
})

gsap.from('#snow_205',{
    opacity:0,
    delay:10.6,
})

gsap.to('#snow_205',{
    delay:15.6,
    scale: 4.5,
})

gsap.from('#snow_206',{
    opacity:0,
    delay:10.6,
})

gsap.to('#snow_206',{
    delay:15.6,
    scale: 4.5,
})

gsap.from('#snow_207',{
    opacity:0,
    delay:10.6,
})

gsap.to('#snow_207',{
    delay:15.6,
    scale: 4.5,
})

gsap.from('#snow_208',{
    opacity:0,
    delay:10.4,
})

gsap.to('#snow_208',{
    delay:15.4,
    scale: 4.5,
})

gsap.from('#snow_209',{
    opacity:0,
    delay:10,
})

gsap.to('#snow_209',{
    delay:15,
    scale: 4.5,
})

gsap.from('#snow_210',{
    opacity:0,
    delay:10.6,
})

gsap.to('#snow_210',{
    delay:15.6,
    scale: 4.5,
})

gsap.from('#snow_211',{
    opacity:0,
    delay:11,
})

gsap.to('#snow_211',{
    delay:16,
    scale: 4.5,
})

gsap.from('#snow_212',{
    opacity:0,
    delay:10.4,
})

gsap.to('#snow_212',{
    delay:15.4,
    scale: 4.5,
})

gsap.from('#snow_213',{
    opacity:0,
    delay:10.4,
})

gsap.to('#snow_213',{
    delay:15.4,
    scale: 4.5,
})

gsap.from('#snow_214',{
    opacity:0,
    delay:10.6,
})

gsap.to('#snow_214',{
    delay:15.6,
    scale: 4.5,
})

gsap.from('#snow_215',{
    opacity:0,
    delay:10.6,
})

gsap.to('#snow_215',{
    delay:15.6,
    scale: 4.5,
})

gsap.from('#snow_216',{
    opacity:0,
    delay:11,
})

gsap.to('#snow_216',{
    delay:16,
    scale: 4.5,
})

gsap.from('#snow_217',{
    opacity:0,
    delay:10.8,
})

gsap.to('#snow_217',{
    delay:15.8,
    scale: 4.5,
})

gsap.from('#snow_218',{
    opacity:0,
    delay:10.2,
})

gsap.to('#snow_218',{
    delay:15.2,
    scale: 4.5,
})

gsap.from('#snow_219',{
    opacity:0,
    delay:11.4,
})

gsap.to('#snow_219',{
    delay:16.4,
    scale: 4.5,
})

gsap.from('#snow_220',{
    opacity:0,
    delay:10.2,
})

gsap.to('#snow_220',{
    delay:15.2,
    scale: 4.5,
})

gsap.from('#snow_221',{
    opacity:0,
    delay:11.8,
})

gsap.to('#snow_221',{
    delay:16.8,
    scale: 4.5,
})

gsap.from('#snow_222',{
    opacity:0,
    delay:10.6,
})

gsap.to('#snow_222',{
    delay:15.6,
    scale: 4.5,
})

gsap.from('#snow_223',{
    opacity:0,
    delay:11.2,
})

gsap.to('#snow_223',{
    delay:16.2,
    scale: 4.5,
})

gsap.from('#snow_224',{
    opacity:0,
    delay:10.8,
})

gsap.to('#snow_224',{
    delay:15.8,
    scale: 4.5,
})

gsap.from('#snow_225',{
    opacity:0,
    delay:11.6,
})

gsap.to('#snow_225',{
    delay:16.6,
    scale: 4.5,
})

gsap.from('#snow_226',{
    opacity:0,
    delay:11,
})

gsap.to('#snow_226',{
    delay:16,
    scale: 4.5,
})

gsap.from('#snow_227',{
    opacity:0,
    delay:10.2,
})

gsap.to('#snow_227',{
    delay:15.2,
    scale: 4.5,
})

gsap.from('#snow_228',{
    opacity:0,
    delay:11.4,
})

gsap.to('#snow_228',{
    delay:16.4,
    scale: 4.5,
})

gsap.from('#snow_229',{
    opacity:0,
    delay:10.4,
})

gsap.to('#snow_229',{
    delay:15.4,
    scale: 4.5,
})

gsap.from('#snow_230',{
    opacity:0,
    delay:11,
})

gsap.to('#snow_230',{
    delay:16,
    scale: 4.5,
})

gsap.from('#snow_231',{
    opacity:0,
    delay:11,
})

gsap.to('#snow_231',{
    delay:16,
    scale: 4.5,
})

gsap.from('#snow_232',{
    opacity:0,
    delay:11,
})

gsap.to('#snow_232',{
    delay:16,
    scale: 4.5,
})

gsap.from('#snow_233',{
    opacity:0,
    delay:10.4,
})

gsap.to('#snow_233',{
    delay:15.4,
    scale: 4.5,
})

gsap.from('#snow_234',{
    opacity:0,
    delay:12,
})

gsap.to('#snow_234',{
    delay:17,
    scale: 4.5,
})

gsap.from('#snow_235',{
    opacity:0,
    delay:11.4,
})

gsap.to('#snow_235',{
    delay:16.4,
    scale: 4.5,
})

gsap.from('#snow_236',{
    opacity:0,
    delay:11,
})

gsap.to('#snow_236',{
    delay:16,
    scale: 4.5,
})

gsap.from('#snow_237',{
    opacity:0,
    delay:11.8,
})

gsap.to('#snow_237',{
    delay:16.8,
    scale: 4.5,
})

gsap.from('#snow_238',{
    opacity:0,
    delay:12.8,
})

gsap.to('#snow_238',{
    delay:17.8,
    scale: 4.5,
})

gsap.from('#snow_239',{
    opacity:0,
    delay:10.6,
})

gsap.to('#snow_239',{
    delay:15.6,
    scale: 4.5,
})

gsap.from('#snow_240',{
    opacity:0,
    delay:12,
})

gsap.to('#snow_240',{
    delay:17,
    scale: 5.5,
})

// snow block 5 starts from here

gsap.from('#snow_241',{
    opacity:0,
    delay:12.4,
})

gsap.to('#snow_241',{
    delay:17.4,
    scale: 5.5,
})

gsap.from('#snow_242',{
    opacity:0,
    delay:14,
})

gsap.to('#snow_242',{
    delay:19,
    scale: 4.5,
})

gsap.from('#snow_243',{
    opacity:0,
    delay:12.8,
})

gsap.to('#snow_243',{
    delay:17.8,
    scale: 4.5,
})

gsap.from('#snow_244',{
    opacity:0,
    delay:13.8,
})

gsap.to('#snow_244',{
    delay:18.8,
    scale: 4.5,
})

gsap.from('#snow_245',{
    opacity:0,
    delay:12.6,
})

gsap.to('#snow_245',{
    delay:17.6,
    scale: 4.5,
})

gsap.from('#snow_246',{
    opacity:0,
    delay:14,
})

gsap.to('#snow_246',{
    delay:19,
    scale: 4.5,
})

gsap.from('#snow_247',{
    opacity:0,
    delay:13.2,
})

gsap.to('#snow_247',{
    delay:18.2,
    scale: 4.5,
})

gsap.from('#snow_248',{
    opacity:0,
    delay:12.2,
})

gsap.to('#snow_248',{
    delay:17.2,
    scale: 4.5,
})

gsap.from('#snow_249',{
    opacity:0,
    delay:13.6,
})

gsap.to('#snow_249',{
    delay:18.6,
    scale: 4.5,
})

gsap.from('#snow_250',{
    opacity:0,
    delay:12.6,
})

gsap.to('#snow_250',{
    delay:17.6,
    scale: 4.5,
})

gsap.from('#snow_251',{
    opacity:0,
    delay:13.8,
})

gsap.to('#snow_251',{
    delay:18.8,
    scale: 4.5,
})

gsap.from('#snow_252',{
    opacity:0,
    delay:13.4,
})

gsap.to('#snow_252',{
    delay:18.4,
    scale: 4.5,
})

gsap.from('#snow_253',{
    opacity:0,
    delay:12.4,
})

gsap.to('#snow_253',{
    delay:17.4,
    scale: 4.5,
})

gsap.from('#snow_254',{
    opacity:0,
    delay:14,
})

gsap.to('#snow_254',{
    delay:19,
    scale: 4.5,
})

gsap.from('#snow_255',{
    opacity:0,
    delay:12.6,
})

gsap.to('#snow_255',{
    delay:17.6,
    scale: 4.5,
})

gsap.from('#snow_256',{
    opacity:0,
    delay:13.8,
})

gsap.to('#snow_256',{
    delay:18.8,
    scale: 4.5,
})

gsap.from('#snow_257',{
    opacity:0,
    delay:13,
})

gsap.to('#snow_257',{
    delay:18,
    scale: 4.5,
})

gsap.from('#snow_258',{
    opacity:0,
    delay:13.6,
})

gsap.to('#snow_258',{
    delay:18.6,
    scale: 4.5,
})

gsap.from('#snow_259',{
    opacity:0,
    delay:12.2,
})

gsap.to('#snow_259',{
    delay:17.2,
    scale: 4.5,
})

gsap.from('#snow_260',{
    opacity:0,
    delay:13.4,
})

gsap.to('#snow_260',{
    delay:18.4,
    scale: 4.5,
})

gsap.from('#snow_261',{
    opacity:0,
    delay:13.2,
})

gsap.to('#snow_261',{
    delay:18.2,
    scale: 4.5,
})

gsap.from('#snow_262',{
    opacity:0,
    delay:12.4,
})

gsap.to('#snow_262',{
    delay:17.4,
    scale: 4.5,
})

gsap.from('#snow_263',{
    opacity:0,
    delay:13,
})

gsap.to('#snow_263',{
    delay:18,
    scale: 4.5,
})

gsap.from('#snow_264',{
    opacity:0,
    delay:13.4,
})

gsap.to('#snow_264',{
    delay:18.4,
    scale: 4.5,
})

gsap.from('#snow_265',{
    opacity:0,
    delay:12.8,
})

gsap.to('#snow_265',{
    delay:17.8,
    scale: 4.5,
})

gsap.from('#snow_266',{
    opacity:0,
    delay:13.8,
})

gsap.to('#snow_266',{
    delay:18.8,
    scale: 4.5,
})

gsap.from('#snow_267',{
    opacity:0,
    delay:14,
})

gsap.to('#snow_267',{
    delay:19,
    scale: 4.5,
})

gsap.from('#snow_268',{
    opacity:0,
    delay:13.2,
})

gsap.to('#snow_268',{
    delay:18.2,
    scale: 4.5,
})

gsap.from('#snow_269',{
    opacity:0,
    delay:13.8,
})

gsap.to('#snow_269',{
    delay:18.8,
    scale: 4.5,
})

gsap.from('#snow_270',{
    opacity:0,
    delay:12.2,
})

gsap.to('#snow_270',{
    delay:17.2,
    scale: 4.5,
})

gsap.from('#snow_271',{
    opacity:0,
    delay:13,
})

gsap.to('#snow_271',{
    delay:18,
    scale: 4.5,
})

gsap.from('#snow_272',{
    opacity:0,
    delay:12.4,
})

gsap.to('#snow_272',{
    delay:17.4,
    scale: 4.5,
})

gsap.from('#snow_273',{
    opacity:0,
    delay:13.6,
})

gsap.to('#snow_273',{
    delay:18.6,
    scale: 4.5,
})

gsap.from('#snow_274',{
    opacity:0,
    delay:13.2,
})

gsap.to('#snow_274',{
    delay:18.2,
    scale: 4.5,
})

gsap.from('#snow_275',{
    opacity:0,
    delay:12.2,
})

gsap.to('#snow_275',{
    delay:17.2,
    scale: 4.5,
})

gsap.from('#snow_276',{
    opacity:0,
    delay:13.8,
})

gsap.to('#snow_276',{
    delay:18.8,
    scale: 4.5,
})

gsap.from('#snow_277',{
    opacity:0,
    delay:12.8,
})

gsap.to('#snow_277',{
    delay:17.8,
    scale: 4.5,
})

gsap.from('#snow_278',{
    opacity:0,
    delay:14,
})

gsap.to('#snow_278',{
    delay:19,
    scale: 4.5,
})

gsap.from('#snow_279',{
    opacity:0,
    delay:12.6,
})

gsap.to('#snow_279',{
    delay:17.6,
    scale: 4.5,
})

gsap.from('#snow_280',{
    opacity:0,
    delay:13.2,
})

gsap.to('#snow_280',{
    delay:18.2,
    scale: 4.5,
})

gsap.from('#snow_281',{
    opacity:0,
    delay:14,
})

gsap.to('#snow_281',{
    delay:19,
    scale: 4.5,
})

gsap.from('#snow_282',{
    opacity:0,
    delay:13,
})

gsap.to('#snow_282',{
    delay:18,
    scale: 4.5,
})

gsap.from('#snow_283',{
    opacity:0,
    delay:13.8,
})

gsap.to('#snow_283',{
    delay:18.8,
    scale: 4.5,
})

gsap.from('#snow_284',{
    opacity:0,
    delay:12.8,
})

gsap.to('#snow_284',{
    delay:17.8,
    scale: 4.5,
})

gsap.from('#snow_285',{
    opacity:0,
    delay:12.2,
})

gsap.to('#snow_285',{
    delay:17.2,
    scale: 4.5,
})

gsap.from('#snow_286',{
    opacity:0,
    delay:13.2,
})

gsap.to('#snow_286',{
    delay:18.2,
    scale: 4.5,
})

gsap.from('#snow_287',{
    opacity:0,
    delay:12.4,
})

gsap.to('#snow_287',{
    delay:17.4,
    scale: 4.5,
})

gsap.from('#snow_288',{
    opacity:0,
    delay:13.8,
})

gsap.to('#snow_288',{
    delay:18.8,
    scale: 4.5,
})

gsap.from('#snow_289',{
    opacity:0,
    delay:12.4,
})

gsap.to('#snow_289',{
    delay:17.4,
    scale: 4.5,
})

gsap.from('#snow_290',{
    opacity:0,
    delay:13.4,
})

gsap.to('#snow_290',{
    delay:18.4,
    scale: 4.5,
})

gsap.from('#snow_291',{
    opacity:0,
    delay:12.6,
})

gsap.to('#snow_291',{
    delay:12.6,
    scale: 4.5,
})

gsap.from('#snow_292',{
    opacity:0,
    delay:14,
})

gsap.to('#snow_292',{
    delay:19,
    scale: 4.5,
})

gsap.from('#snow_293',{
    opacity:0,
    delay:13.2,
})

gsap.to('#snow_293',{
    delay:18.2,
    scale: 4.5,
})

gsap.from('#snow_294',{
    opacity:0,
    delay:13.4,
})

gsap.to('#snow_294',{
    delay:18.4,
    scale: 4.5,
})

gsap.from('#snow_295',{
    opacity:0,
    delay:13.8,
})

gsap.to('#snow_295',{
    delay:18.8,
    scale: 4.5,
})

gsap.from('#snow_296',{
    opacity:0,
    delay:13,
})

gsap.to('#snow_296',{
    delay:18,
    scale: 4.5,
})

gsap.from('#snow_297',{
    opacity:0,
    delay:13.6,
})

gsap.to('#snow_297',{
    delay:18.6,
    scale: 4.5,
})

gsap.from('#snow_298',{
    opacity:0,
    delay:12.2,
})

gsap.to('#snow_298',{
    delay:17.2,
    scale: 4.5,
})

gsap.from('#snow_299',{
    opacity:0,
    delay:14,
})

gsap.to('#snow_299',{
    delay:19,
    scale: 4.5,
})

gsap.from('#snow_300',{
    opacity:0,
    delay:12.8,
})

gsap.to('#snow_300',{
    delay:17.8,
    scale: 5.5,
})

// snow block 6 starts from here 

gsap.from('#snow_301',{
    opacity:0,
    delay:15.8,
})

gsap.to('#snow_301',{
    delay:20.8,
    scale: 5.5,
})

gsap.from('#snow_302',{
    opacity:0,
    delay:14.6,
})

gsap.to('#snow_302',{
    delay:19.6,
    scale: 4.5,
})

gsap.from('#snow_303',{
    opacity:0,
    delay:15.4,
})

gsap.to('#snow_303',{
    delay:20.4,
    scale: 4.5,
})

gsap.from('#snow_304',{
    opacity:0,
    delay:14.2,
})

gsap.to('#snow_304',{
    delay:19.2,
    scale: 4.5,
})

gsap.from('#snow_305',{
    opacity:0,
    delay:15.2,
})

gsap.to('#snow_305',{
    delay:20.2,
    scale: 4.5,
})

gsap.from('#snow_306',{
    opacity:0,
    delay:16,
})

gsap.to('#snow_306',{
    delay:21,
    scale: 4.5,
})

gsap.from('#snow_307',{
    opacity:0,
    delay:14.8,
})

gsap.to('#snow_307',{
    delay:19.8,
    scale: 4.5,
})

gsap.from('#snow_308',{
    opacity:0,
    delay:15.6,
})

gsap.to('#snow_308',{
    delay:20.6,
    scale: 4.5,
})

gsap.from('#snow_309',{
    opacity:0,
    delay:14.6,
})

gsap.to('#snow_309',{
    delay:19.6,
    scale: 4.5,
})

gsap.from('#snow_310',{
    opacity:0,
    delay:14.4
})

gsap.to('#snow_310',{
    delay:19.4,
    scale: 4.5,
})

gsap.from('#snow_311',{
    opacity:0,
    delay:15.8,
})

gsap.to('#snow_311',{
    delay:20.8,
    scale: 4.5,
})

gsap.from('#snow_312',{
    opacity:0,
    delay:14.2,
})

gsap.to('#snow_312',{
    delay:19.2,
    scale: 4.5,
})

gsap.from('#snow_313',{
    opacity:0,
    delay:15.2,
})

gsap.to('#snow_313',{
    delay:20.2,
    scale: 4.5,
})

gsap.from('#snow_314',{
    opacity:0,
    delay:14.4,
})

gsap.to('#snow_314',{
    delay:19.4,
    scale: 4.5,
})

gsap.from('#snow_315',{
    opacity:0,
    delay:14.2,
})

gsap.to('#snow_315',{
    delay:19.2,
    scale: 4.5,
})

gsap.from('#snow_316',{
    opacity:0,
    delay:16,
})

gsap.to('#snow_316',{
    delay:21,
    scale: 4.5,
})

gsap.from('#snow_317',{
    opacity:0,
    delay:15.8,
})

gsap.to('#snow_317',{
    delay:20.8,
    scale: 4.5,
})

gsap.from('#snow_318',{
    opacity:0,
    delay:14.6,
})

gsap.to('#snow_318',{
    delay:19.6,
    scale: 4.5,
})

gsap.from('#snow_319',{
    opacity:0,
    delay:16,
})

gsap.to('#snow_319',{
    delay:21,
    scale: 6,
})

gsap.from('#snow_320',{
    opacity:0,
    delay:15.4,
})

gsap.to('#snow_320',{
    delay:20.4,
    scale: 4.5,
})

gsap.from('#snow_321',{
    opacity:0,
    delay:15.4,
})

gsap.to('#snow_321',{
    delay:20.4,
    scale: 6,
})

gsap.from('#snow_322',{
    opacity:0,
    delay:15.6,
})

gsap.to('#snow_322',{
    delay:20.6,
    scale: 4.5,
})

gsap.from('#snow_323',{
    opacity:0,
    delay:14.6,
})

gsap.to('#snow_323',{
    delay:19.6,
    scale: 4.5,
})

gsap.from('#snow_324',{
    opacity:0,
    delay:16,
})

gsap.to('#snow_324',{
    delay:21,
    scale: 4.5,
})

gsap.from('#snow_325',{
    opacity:0,
    delay:14.4,
})

gsap.to('#snow_325',{
    delay:19.4,
    scale: 4.5,
})

gsap.from('#snow_326',{
    opacity:0,
    delay:15,
})

gsap.to('#snow_326',{
    delay:20,
    scale: 4.5,
})

gsap.from('#snow_327',{
    opacity:0,
    delay:15.8,
})

gsap.to('#snow_327',{
    delay:20.8,
    scale: 4.5,
})

gsap.from('#snow_328',{
    opacity:0,
    delay:15.2,
})

gsap.to('#snow_328',{
    delay:20.2,
    scale: 4.5,
})

gsap.from('#snow_329',{
    opacity:0,
    delay:14.6,
})

gsap.to('#snow_329',{
    delay:19.6,
    scale: 4.5,
})

gsap.from('#snow_330',{
    opacity:0,
    delay:15.8,
})

gsap.to('#snow_330',{
    delay:20.8,
    scale: 4.5,
})

gsap.from('#snow_331',{
    opacity:0,
    delay:16,
})

gsap.to('#snow_331',{
    delay:21,
    scale: 4.5,
})

gsap.from('#snow_332',{
    opacity:0,
    delay:15.2,
})

gsap.to('#snow_332',{
    delay:20.2,
    scale: 4.5,
})

gsap.from('#snow_333',{
    opacity:0,
    delay:15.8,
})

gsap.to('#snow_333',{
    delay:20.8,
    scale: 4.5,
})

gsap.from('#snow_334',{
    opacity:0,
    delay:14.8,
})

gsap.to('#snow_334',{
    delay:19.8,
    scale: 4.5,
})

gsap.from('#snow_335',{
    opacity:0,
    delay:14.2,
})

gsap.to('#snow_335',{
    delay:19.2,
    scale: 4.5,
})

gsap.from('#snow_336',{
    opacity:0,
    delay:15.4,
})

gsap.to('#snow_336',{
    delay:20.4,
    scale: 4.5,
})

gsap.from('#snow_337',{
    opacity:0,
    delay:16,
})

gsap.to('#snow_337',{
    delay:21,
    scale: 4.5,
})

gsap.from('#snow_338',{
    opacity:0,
    delay:15.8,
})

gsap.to('#snow_338',{
    delay:20.8,
    scale: 4.5,
})

gsap.from('#snow_339',{
    opacity:0,
    delay:14.4,
})

gsap.to('#snow_339',{
    delay:19.4,
    scale: 6,
})

gsap.from('#snow_340',{
    opacity:0,
    delay:15.6,
})

gsap.to('#snow_340',{
    delay:20.6,
    scale: 4.5,
})

gsap.from('#snow_341',{
    opacity:0,
    delay:15,
})

gsap.to('#snow_341',{
    delay:20,
    scale: 6,
})

gsap.from('#snow_342',{
    opacity:0,
    delay:14.2,
})

gsap.to('#snow_342',{
    delay:19.2,
    scale: 4.5,
})

gsap.from('#snow_343',{
    opacity:0,
    delay:14.6,
})

gsap.to('#snow_343',{
    delay:19.6,
    scale: 4.5,
})

gsap.from('#snow_344',{
    opacity:0,
    delay:14.4,
})

gsap.to('#snow_344',{
    delay:19.4,
    scale: 4.5,
})

gsap.from('#snow_345',{
    opacity:0,
    delay:14.4,
})

gsap.to('#snow_345',{
    delay:19.4,
    scale: 4.5,
})

gsap.from('#snow_346',{
    opacity:0,
    delay:15.8,
})

gsap.to('#snow_346',{
    delay:20.8,
    scale: 4.5,
})

gsap.from('#snow_347',{
    opacity:0,
    delay:14.4,
})

gsap.to('#snow_347',{
    delay:19.4,
    scale: 4.5,
})

gsap.from('#snow_348',{
    opacity:0,
    delay:14.8,
})

gsap.to('#snow_348',{
    delay:19.8,
    scale: 4.5,
})

gsap.from('#snow_349',{
    opacity:0,
    delay:15,
})

gsap.to('#snow_349',{
    delay:20,
    scale: 4.5,
})

gsap.from('#snow_350',{
    opacity:0,
    delay:15.8,
})

gsap.to('#snow_350',{
    delay:20.8,
    scale: 4.5,
})


gsap.from('#snow_351',{
    opacity:0,
    delay:16,
})

gsap.to('#snow_351',{
    delay:21,
    scale: 4.5,
})

gsap.from('#snow_352',{
    opacity:0,
    delay:15.2,
})

gsap.to('#snow_352',{
    delay:20.2,
    scale: 4.5,
})

gsap.from('#snow_353',{
    opacity:0,
    delay:14.6,
})

gsap.to('#snow_353',{
    delay:19.6,
    scale: 4.5,
})

gsap.from('#snow_354',{
    opacity:0,
    delay:15.6,
})

gsap.to('#snow_354',{
    delay:20.6,
    scale: 4.5,
})

gsap.from('#snow_355',{
    opacity:0,
    delay:15.4,
})

gsap.to('#snow_355',{
    delay:20.4,
    scale: 4.5,
})

gsap.from('#snow_356',{
    opacity:0,
    delay:16,
})

gsap.to('#snow_356',{
    delay:21,
    scale: 4.5,
})

gsap.from('#snow_357',{
    opacity:0,
    delay:15.2,
})

gsap.to('#snow_357',{
    delay:20.2,
    scale: 4.5,
})

gsap.from('#snow_358',{
    opacity:0,
    delay:14.2,
})

gsap.to('#snow_358',{
    delay:19.2,
    scale: 4.5,
})

gsap.from('#snow_359',{
    opacity:0,
    delay:15,
})

gsap.to('#snow_359',{
    delay:20,
    scale:5.5,
})

gsap.from('#snow_360',{
    opacity:0,
    delay:14.6,
})

gsap.to('#snow_360',{
    delay:19.6,
    scale:6.5,
})

// Objects will disappear from here

// falling snow

gsap.to(".snow_block_1",{
    opacity:0,
    duration:4,
    delay:30,
})

gsap.to(".snow_block_2",{
    opacity:0,
    duration:4,
    delay:31,
})

gsap.to(".snow_block_3",{
    opacity:0,
    duration:4,
    delay:32,
})

// snow on the road

gsap.to(".snow_block_4",{
    opacity:0,
    duration:4,
    delay:33,
})

gsap.to(".snow_block_5",{
    opacity:0,
    duration:4,
    delay:34,
})

gsap.to(".snow_block_6",{
    opacity:0,
    duration:4,
    delay:35,
})

// vehicles

// car is escaping the viewport

gsap.to('#car',{
    x:-1000,
    duration:5,
    delay:36
})
    
gsap.to('#tyre_1',{
    x:-1000,
    duration:5,
    delay:36
})

gsap.to('#tyre_2',{
    x:-1000,
    duration:5,
    delay:36
})

// truck is escaping the viewport

gsap.to('#truck',{
    x:-1500,
    duration:6,
    delay:38
})

gsap.to('h2',{
    x:-1500,
    duration:6,
    delay:38
})
    
gsap.to('#truck_tyre_1',{
    x:-1500,
    duration:6,
    delay:38
})

gsap.to('#truck_tyre_2',{
    x:-1500,
    duration:6,
    delay:38
})

gsap.to('#truck',{
    opacity:0,
    delay:42
})

gsap.to('h2',{
    opacity:0,
    delay:42
})
    
gsap.to('#truck_tyre_1',{
    opacity:0,
    delay:42
})

gsap.to('#truck_tyre_2',{
    opacity:0,
    delay:42
})

// scooty is escaping the viewport

gsap.to("#scooty",{
    x:-500,
    delay:34,
    duration:3,
})

gsap.to("#bike",{
    x:-550,
    delay:35,
    duration:3,
})

gsap.to('#bike_tyre_1',{
    x:-550,
    delay:35,
    duration:3,
})

gsap.to('#bike_tyre_2',{
    x:-550,
    delay:35,
    duration:3,
})

// building disappears

gsap.to("#building",{
    opacity:0,
    scale:6,
    duration:3,
    delay:45.5,
})

// road disappears

gsap.to("#road",{
    scale:0,
    duration:3,
    delay:43.5,
})

// greetings

gsap.from("h1",{
    opacity:0,
    duration:3,
    delay:47.5,
})

gsap.to("#audio",{
    opacity:0,
    delay:3
})

// my image

gsap.from('.pic_container',{
    opacity:0,
    y:-500,
    x:200,
    delay:45.5,
    duration:5
})

gsap.from('#my_pic',{
    opacity:0,
    delay:48,
    // duration:3,
})

gsap.to('#my_pic',{
    delay:48,
    duration:6,
    scale:18
})