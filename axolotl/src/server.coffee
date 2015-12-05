sinon = require 'sinon'

module.exports = ->
    server             = sinon.fakeServer.create()
    server.autoRespond = yes
    server.respondImmediately = yes
    server.autoRespondAfter = 0

    # Default response as an empty array
    server.respondWith 'GET', /.*/,
        [
            200
            { 'Content-Type': 'application/json' }
            "[]"
        ]

    server.respondWith 'GET', 'creatives?isArchived=0&recentlyOpened=1&accountId=ba9e702b',
        [
            200
            { 'Content-Type': 'application/json' }
            require('./fixtures/recent_creatives.coffee')
        ]

    server.respondWith 'GET', 'folders?clazz=Campaign&accountId=ba9e702b',
        [
            200
            { 'Content-Type': 'application/json' }
            require('./fixtures/campaigns.coffee')
        ]

    server.respondWith 'GET', 'partners?accountId=ba9e702b',
        [
            200
            { 'Content-Type': 'application/json' }
            require('./fixtures/partners.coffee')
        ]

    server.respondWith 'GET', "https://hub.mab.uros/api/analytics?metrics=sessions&dimensions=campaignId&filters.campaignId=fc418871,e59b9c18,8a1c7013,46a3f2e8,0cbea0e5,be919937,854d4313,853101da,3bb3c3a0,ec77f139,b88bc2ec,66f54f33,198feafe,5fa70698,117e52a2,e1831364,8eaa213f,ff922a58,1194e403,ac29f2ed,791b7417,dbb19941,a949faea,eb223866,470b5a0a,152c0fa6,a29a21bc,aed2449a,a0cd2b53,87bdafc3,2904a8a0,02fcfbaa,8ec61805,4aba088a,74db7bce,5d2bf391,7f48006c,72c051d9,7a14a257,6061e1ff,7682d8be,aaebc42d,f548e962,00a736d2,ad257c68,3f5fa9b8,bd2c96f0,fd3da918,9105eaf1,8dcf4dbe,c23658ab,e458842e,fb199b25,3449cf61,50067168,2ba84192,f8f7a653,12c14cf7,d6bd2d5f,45391ea7,a76d77de,a92a062d,12b59fb3,15feae80,975e310c,7c66a82e,2a3d763d,a4aed97c,5299df7b,e9287445,e6fe062f,e4cad7ca,a854374a,3fc35919,3300ceeb,dd2ef0bd,07a26d04,3547dbe4,fb30eac1,145260c9,aca0f6c3,7a49ee37,aabc368a,6d45e519,7bba72fc,13c17db1,72b92093,f5f1b5ef,db82daf3,35409cdc,6e0a3d8d,68511710,49bc34ba,20475a66,ec04bea1,29bae5f9,ef131309,78b7bc95,4944cbb4,f559d664,9b45021b,bb12f0ff,d688a23b,bce3172e,38b7ccbd,87e5dc70,75f4b649,34ee290e,363fc807,b9caa949,be3d5769,15d8092f,50463e5f,aeee90f2,82885ac4,fe78c392,281bcd45,6b9af569,e70db274,84f664d6,79f8e6bc,4cf326f4,e1612d12,b7d890a6,8d9bb0df,ff9b4a66,425d1587,c0df449a,f8d53a78,cfa7296f,1f026532,b040388a,000e8c9e,605d1e9b,043b6058,be290eda,aab771f0,dfb93d97,6916de01,f2ef46ec,e4945a9c,d2624dbc,ef13c7bc,0336d635,d3c19317,32dba10f,9c5a7353,f4cc7603,6c4d22a0,54911e24,491c71b9,6435c8d2,25216ce5,1075ca39,c799b7a6,2f8d6136,08a8b041,d8be5704,441e8e85,aa111e28,b530731a,e84c4ffc,14ce7730,635d631e,be22e361,0ab639e5,fc39ec77,59c9e75e,08bad65a,97884011,be5c4775,27c00fb5,a7d2c7f9,cb3033f9,0692724d,5787d914,472d71e7,01f00c9b,5ec1e973,a9497671,e175ce13,3ef56d03,df61ed94,f4c0df69,82eb3090,6baf1ce5,aae806fd,b322a69b,27c983c7,50b02a51,febbfc9f,3a5f1148,004c8f1b,9b5685dc,0a9b126b,f60e4983,e3a2575f,d5397977,8b34e44e,a0b2cf7e,de0cd23e,f03f9d3c,9ed58647,ad84c834,8095d72d,07b61336,9d94ac69,4c373942,f61c5c52,0201fc87,6e252baa,6f6f7495,937d5e0d,9ff85e4f,892d4dce,e98f5717,2ef93537,c5419e48,d1c3a74b,ae2ed714,1bb76506,3e7f1f90,681f917c,50b4757c,03b8cbf0,774cb050,49fa2577,0a8697c9,661236a5,d52e5935,9f119311,09daf466,ed60f2ba,bf201c19,e08166d9,920d403d,eb210a6b,ba32bf25,da83d37d,8d8a8ea6,ecbc0197,93a95607,8feb6d96,f8483fb4,c1b5fda1,c831d44d,ed876c2c,da298476,0137d2d2,5d2fd61c,0c2fe021,84e7b86f,75197b42,9efc43a6,888d2273,fd07ad6d,865dad87,62b7b17e,1a271d91,a8ad37de,bfdb0ba7,9f5c7170,1808fa30,53d6037c,784e1a5e,c76e4a6b,742106d5,ac7a4917,3e86370b,b9237028,7dd8e679,65d27e50,2233cce1,6dd9e2a5,d78dbb6f,b845fc85,b42aeb31,c4df7278,15999176,6cdebbc3,7f6cb2ba,533b2ad0,782296b1,1cd07b05,669a1f97,70a55748,7e1ee3d8,e40c5c6f,fc2d30cd,0d5923d8,88d1357e,83ca6286,dc129fea,1c0da879,92ef7c09,71a3278c,2e45af50,bb19cb92,a37fd644,15e7aec6,8671e407,cf903dc7,34c2d057,c0d197e5,d1828084,d3b6923c,b132f313,0d5ce936,d61b2cd6,c44222a0,ea667b43,8f75982a,91eff0a3,940f0b6d,23e723bc,9ace44a2,65a365f4,82679eb5,8bfa9b0e,60d8dea0,107d16ec,e4dd5e8d,67a88c73,42bb7861,e8a909aa,19f5c660,0c7cc490,c45dc37b,0ff9158c,43cdc42c,f14129d8,2f4de7e1,5afd4282,10bd1fc7,5516ba1f,6d9ae059,957c50d4,bcf82930,c070ff7b,8c7dbd25,2c8ef516,d5c5464e,877fb0c9,290abbe9,2f5a2373,826b1eef,2106cb37,57165c64,346bf4b8,bd24b50c,5f90ce80,db825f22,e1a91fb9,fc9fd5b6,550ed839,9646b17e,659a8ca3,f9421543,68c5df49,cb1de4f1,d8ac3fc0,246d0a01,2e5f618a,7aca1ee3,4e935130,d22a3087,70faa443,8d5994fb,d9a2a1ce,35727cea,158cd272,8cf9261c,868aef5e,39887349,710575fa,5ac2f2dd,019fbf3b,c0f5531a,c4a78190,b23e8455,5266c683,98cf1a22,9ff7bedd,7eedc3e1,9a014a2c,28fcbd7d,24e97f3c,ce815236,d4d1efb9,08aeee9c,9eb95f33,b9da4322,d54020bd,36247179,945cdc59,3b5db6cb,db249f4f,5cfb2388,ec035cea,cc861e9e,e06c2dea,58398a4a,dd27cc45,7f0bbc5b,23cd144e,f5f96db2,4363accf,fb5d460a,237772ab,d645dd18,57b348e1,5c797f4c,208cf614,07368ebc,bea49389,23b569a2,342e776b,8fddb63b,3cf016dd,2f0e4bfe,b054a5b3,033bc887,75344aa7,cde5bca4,4f3da70a,52a3d9b2,1511e66f,bfb1ec95,56e52988,fda91e8e,284a4454,e9e9b4d9,f4f4acb7,39f84606,2edf1b64,dc998755,a12d1007,30e3e3a4,983a6b88,534f6053,e14052f2,e9745c88,ce256a2f,ba70c871,aa705544,e930e44d,8d9c477f,f5c01437,e462364d,91fa6e0c,871b0cdb,b2a5f7a8,53fc1057,6a3325b1,6d438571,48beb5b4,9bc9a7d2,8d02dbe4,5a6809a7,9a6f652c,2df19572,b822b1f6,8003258d,5f166666,4e83920e,a701e983,a06d0e44,56b75207,4b37a0be,4f254977,9041a42f,6e91368a,f65007f9,be592d5e,06a49f36,e46156ed,c8bd7f23,82ebee29,bee50f3a,94177bfd,212366a7,e3e1b3be,e17d720c,a563512c,4fcf256c,3e97a25a,034d7638,ba77a5e7,86b7a462,387b9c23,356d75a6,dea6b985,7c08b71b,c9164f14,12692de8,10e47823,d077734e,0f02e397,dfaa47ea,ae7d5eca,37e1f280,eb7e0c51,34e592bd,a443dcd1,bb31b468,843db092,4f19982f,c81f233e,0d6ab34a,33333707,32531506,88bc9525,f2750c95,f4c716de,b8d735f9,0c080028,444dcf8c,df5d6c67,ea88979d,fd9d879e,c13b43cd,3ba3e346,b4cf70b3,8ad42300,c4ca90dd,53ee5842,81cb07e2,3097c1f5,e0113553,aa2421d2,b2fd8a20,3eca3ea3,bb5c1a3a,0974deab,eb176a0c,b62ae8af,ddd29e4b,784b1600,7c116f6c,4b87d1ab,56716a48,0417ab07,ccafdb04,57103d36,0a653b73,11f615c0,3f3258fa,77e82059,68a35a45,1e9421c0,455ecbab,fcc29f90,ae2ea3f2,cb709119,3ea445bd,b5a44ad4,3e60e343,cb806209,20ce9f32,50204595,bc5db17b,c3349ac8,37405697,a2234adf,18b02cf2,68df3935,638656fe,83d35dc0,23008802,60c67652,31ea1f86,917cee87,9ca98ce8,08152a9e,d082b55c,e2c1c3ed,abc896b8,d00fe858,4b86191b,4951adbf,01805532,e46979e2,6a47bfeb,5b0348fb,27768965,55ff0632,7b815549,6139521c,7f80c488,c6ba6436,1c97f383,9fdf0210,5fc932a4,d6d3fa2d,b31dba20,d044c9f2,59495089,e43a1ece,829d5bb2,f34fbb1a,2ab1ae61,425d65fb,a55b4847,d8c02b82,3a1486ac,c6a3a5c8,762d59dd,ca992e1b,c8ddd2b5,8f0349ba,aec1c222,33c86b57,54caa28e,402e5e4d,29d16c72,e79f34a3,6bb8360a,2835325b,4a3b9ee3,f1bc9a69,c067d2e1,c02502e6,bcb62b39,33dae286,1e0e94b1,2f1f5c1b,8bcbc07c,8cd8cd6d,5b9a7862,fd6667d5,74b98a47,f0fc2259,e05e83b2,37e6ace4,930885bd,06bd12ed,b5bdc7cd,10fcbff8,413debd3,6d2b935f,fe12e24b,01f6423e,9b176c48,e1fd61f5,e454c78e,79b02359,69b9b657,c76c17ed,a141df38,341639ec,5d8691be,b62ae4fc,59009c5f,9c9fb236,d24698e7,78434d53,d5111ceb,f40878f4,bd491f30,6a5615d0,867825fa,271ecd3f,9ac5d253,9871bb52,1af2277c,9fd6a3f8,b1ce1f69,731b10eb,1244813a,3fb88e82,66b8714b,3c0fa96d,f6db1b6c,f4a63e74,d2933fe7,584f7c3e,d05306fa,ccf5a550,330d5dc6,d857df66,e3a34397,ed707dd2,d5e9eb08,bbd74fec,8476d42a,cef7c87b,a6476375,4e103796,2792a23e,66559484,1f94e8b8,95d42068,9cd9fe4f,6a057e98,429d5094,736edb0a,a94ae3af,4c293732,b3ccdf52,3a1836cd,9f8a1c31,0572fd95,e5d226b4,57636ec7,9e154009,b9f296b2,323902f9,2dc9b1ad,6f2742f9,fcac6494,53ba7a01,36162c29,6adcdb22,903039b2,f31dc733,4ae818f1,d1243d86,301d92ae,81916db1,80ca39ac,bb8d24c2,af1b4f27,dd0fdb7b,2ac0d555,c59948b5,09505d70,9d193f29,c11ee8e4,35e0e897,6b2fee29,ca854ab8,09f92e0e,47715fe7,28b0658c,9949082d,8024894c,f4f15f9f,b4a74dee,662cd2ba,4fad5606,7c3d6ce9,58c9de27,3504df94,b5142ea4,694089ef,9ddc2d56,690f2d6d,6707bd2a,e54e5cd7,dcb783a7,0ad4da57,cc521333,6c31bf77,1b2e204c,3cd5a74b,6069e3b7,b53149cc,ffd5bceb,f64ec2d6,1b767f18,841db032,01fec8f4,c63fe023,244540d3,dbaa05b0,bbebceeb,a47251b7,dea90210,af53be03,ccb1fd44,5eb95998,19df4eef,77fbac1e,dd1a9d00,745b22a2,259704c7,666b91f2,05f163fc,d510de46,b9a2d6b1,6049e2a6,508b646e,076ab5f1,94348022,22144e2e,be2c5aa9,eb11932b,58309e80,a47040eb,4d2de33c,433024fd,4a75dd43,ef788e89,72a48126,c23f5f2e,3aff20c2,9bc819aa,d653b931,f0c3f591,f3723758,5d715ade,d4a02c52,8415b744,bf06841b,9a38604b,44ef378e,3a77cc08,41a84637,df589bcd,2acc3593,6f03884a,9fc6f051,a7f313b3,51f6ce15,22452cb1,48eeec19,09dce00d,da5876c8,d4adfbf4,b2b2b8af,1b2fb0c2,137ebac2,66a75e2a,00aa4b6c,15d85701,20d7f27a,aa473a18,bc66b379&compact=1",
        [
            200
            { 'Content-Type': 'application/json' }
            require('./fixtures/sessions_cube.coffee')
        ]

    server.respondWith 'GET', "https://hub.mab.uros/api/analytics?metrics=sessions&dimensions=campaignId,utcDate,utcHour&filters.campaignId=fc418871,e59b9c18,8a1c7013,46a3f2e8,0cbea0e5,be919937,854d4313,853101da,3bb3c3a0,ec77f139,b88bc2ec,66f54f33,198feafe,5fa70698,117e52a2,e1831364,8eaa213f,ff922a58,1194e403,ac29f2ed,791b7417,dbb19941,a949faea,eb223866,470b5a0a,152c0fa6,a29a21bc,aed2449a,a0cd2b53,87bdafc3,2904a8a0,02fcfbaa,8ec61805,4aba088a,74db7bce,5d2bf391,7f48006c,72c051d9,7a14a257,6061e1ff,7682d8be,aaebc42d,f548e962,00a736d2,ad257c68,3f5fa9b8,bd2c96f0,fd3da918,9105eaf1,8dcf4dbe,c23658ab,e458842e,fb199b25,3449cf61,50067168,2ba84192,f8f7a653,12c14cf7,d6bd2d5f,45391ea7,a76d77de,a92a062d,12b59fb3,15feae80,975e310c,7c66a82e,2a3d763d,a4aed97c,5299df7b,e9287445,e6fe062f,e4cad7ca,a854374a,3fc35919,3300ceeb,dd2ef0bd,07a26d04,3547dbe4,fb30eac1,145260c9,aca0f6c3,7a49ee37,aabc368a,6d45e519,7bba72fc,13c17db1,72b92093,f5f1b5ef,db82daf3,35409cdc,6e0a3d8d,68511710,49bc34ba,20475a66,ec04bea1,29bae5f9,ef131309,78b7bc95,4944cbb4,f559d664,9b45021b,bb12f0ff,d688a23b,bce3172e,38b7ccbd,87e5dc70,75f4b649,34ee290e,363fc807,b9caa949,be3d5769,15d8092f,50463e5f,aeee90f2,82885ac4,fe78c392,281bcd45,6b9af569,e70db274,84f664d6,79f8e6bc,4cf326f4,e1612d12,b7d890a6,8d9bb0df,ff9b4a66,425d1587,c0df449a,f8d53a78,cfa7296f,1f026532,b040388a,000e8c9e,605d1e9b,043b6058,be290eda,aab771f0,dfb93d97,6916de01,f2ef46ec,e4945a9c,d2624dbc,ef13c7bc,0336d635,d3c19317,32dba10f,9c5a7353,f4cc7603,6c4d22a0,54911e24,491c71b9,6435c8d2,25216ce5,1075ca39,c799b7a6,2f8d6136,08a8b041,d8be5704,441e8e85,aa111e28,b530731a,e84c4ffc,14ce7730,635d631e,be22e361,0ab639e5,fc39ec77,59c9e75e,08bad65a,97884011,be5c4775,27c00fb5,a7d2c7f9,cb3033f9,0692724d,5787d914,472d71e7,01f00c9b,5ec1e973,a9497671,e175ce13,3ef56d03,df61ed94,f4c0df69,82eb3090,6baf1ce5,aae806fd,b322a69b,27c983c7,50b02a51,febbfc9f,3a5f1148,004c8f1b,9b5685dc,0a9b126b,f60e4983,e3a2575f,d5397977,8b34e44e,a0b2cf7e,de0cd23e,f03f9d3c,9ed58647,ad84c834,8095d72d,07b61336,9d94ac69,4c373942,f61c5c52,0201fc87,6e252baa,6f6f7495,937d5e0d,9ff85e4f,892d4dce,e98f5717,2ef93537,c5419e48,d1c3a74b,ae2ed714,1bb76506,3e7f1f90,681f917c,50b4757c,03b8cbf0,774cb050,49fa2577,0a8697c9,661236a5,d52e5935,9f119311,09daf466,ed60f2ba,bf201c19,e08166d9,920d403d,eb210a6b,ba32bf25,da83d37d,8d8a8ea6,ecbc0197,93a95607,8feb6d96,f8483fb4,c1b5fda1,c831d44d,ed876c2c,da298476,0137d2d2,5d2fd61c,0c2fe021,84e7b86f,75197b42,9efc43a6,888d2273,fd07ad6d,865dad87,62b7b17e,1a271d91,a8ad37de,bfdb0ba7,9f5c7170,1808fa30,53d6037c,784e1a5e,c76e4a6b,742106d5,ac7a4917,3e86370b,b9237028,7dd8e679,65d27e50,2233cce1,6dd9e2a5,d78dbb6f,b845fc85,b42aeb31,c4df7278,15999176,6cdebbc3,7f6cb2ba,533b2ad0,782296b1,1cd07b05,669a1f97,70a55748,7e1ee3d8,e40c5c6f,fc2d30cd,0d5923d8,88d1357e,83ca6286,dc129fea,1c0da879,92ef7c09,71a3278c,2e45af50,bb19cb92,a37fd644,15e7aec6,8671e407,cf903dc7,34c2d057,c0d197e5,d1828084,d3b6923c,b132f313,0d5ce936,d61b2cd6,c44222a0,ea667b43,8f75982a,91eff0a3,940f0b6d,23e723bc,9ace44a2,65a365f4,82679eb5,8bfa9b0e,60d8dea0,107d16ec,e4dd5e8d,67a88c73,42bb7861,e8a909aa,19f5c660,0c7cc490,c45dc37b,0ff9158c,43cdc42c,f14129d8,2f4de7e1,5afd4282,10bd1fc7,5516ba1f,6d9ae059,957c50d4,bcf82930,c070ff7b,8c7dbd25,2c8ef516,d5c5464e,877fb0c9,290abbe9,2f5a2373,826b1eef,2106cb37,57165c64,346bf4b8,bd24b50c,5f90ce80,db825f22,e1a91fb9,fc9fd5b6,550ed839,9646b17e,659a8ca3,f9421543,68c5df49,cb1de4f1,d8ac3fc0,246d0a01,2e5f618a,7aca1ee3,4e935130,d22a3087,70faa443,8d5994fb,d9a2a1ce,35727cea,158cd272,8cf9261c,868aef5e,39887349,710575fa,5ac2f2dd,019fbf3b,c0f5531a,c4a78190,b23e8455,5266c683,98cf1a22,9ff7bedd,7eedc3e1,9a014a2c,28fcbd7d,24e97f3c,ce815236,d4d1efb9,08aeee9c,9eb95f33,b9da4322,d54020bd,36247179,945cdc59,3b5db6cb,db249f4f,5cfb2388,ec035cea,cc861e9e,e06c2dea,58398a4a,dd27cc45,7f0bbc5b,23cd144e,f5f96db2,4363accf,fb5d460a,237772ab,d645dd18,57b348e1,5c797f4c,208cf614,07368ebc,bea49389,23b569a2,342e776b,8fddb63b,3cf016dd,2f0e4bfe,b054a5b3,033bc887,75344aa7,cde5bca4,4f3da70a,52a3d9b2,1511e66f,bfb1ec95,56e52988,fda91e8e,284a4454,e9e9b4d9,f4f4acb7,39f84606,2edf1b64,dc998755,a12d1007,30e3e3a4,983a6b88,534f6053,e14052f2,e9745c88,ce256a2f,ba70c871,aa705544,e930e44d,8d9c477f,f5c01437,e462364d,91fa6e0c,871b0cdb,b2a5f7a8,53fc1057,6a3325b1,6d438571,48beb5b4,9bc9a7d2,8d02dbe4,5a6809a7,9a6f652c,2df19572,b822b1f6,8003258d,5f166666,4e83920e,a701e983,a06d0e44,56b75207,4b37a0be,4f254977,9041a42f,6e91368a,f65007f9,be592d5e,06a49f36,e46156ed,c8bd7f23,82ebee29,bee50f3a,94177bfd,212366a7,e3e1b3be,e17d720c,a563512c,4fcf256c,3e97a25a,034d7638,ba77a5e7,86b7a462,387b9c23,356d75a6,dea6b985,7c08b71b,c9164f14,12692de8,10e47823,d077734e,0f02e397,dfaa47ea,ae7d5eca,37e1f280,eb7e0c51,34e592bd,a443dcd1,bb31b468,843db092,4f19982f,c81f233e,0d6ab34a,33333707,32531506,88bc9525,f2750c95,f4c716de,b8d735f9,0c080028,444dcf8c,df5d6c67,ea88979d,fd9d879e,c13b43cd,3ba3e346,b4cf70b3,8ad42300,c4ca90dd,53ee5842,81cb07e2,3097c1f5,e0113553,aa2421d2,b2fd8a20,3eca3ea3,bb5c1a3a,0974deab,eb176a0c,b62ae8af,ddd29e4b,784b1600,7c116f6c,4b87d1ab,56716a48,0417ab07,ccafdb04,57103d36,0a653b73,11f615c0,3f3258fa,77e82059,68a35a45,1e9421c0,455ecbab,fcc29f90,ae2ea3f2,cb709119,3ea445bd,b5a44ad4,3e60e343,cb806209,20ce9f32,50204595,bc5db17b,c3349ac8,37405697,a2234adf,18b02cf2,68df3935,638656fe,83d35dc0,23008802,60c67652,31ea1f86,917cee87,9ca98ce8,08152a9e,d082b55c,e2c1c3ed,abc896b8,d00fe858,4b86191b,4951adbf,01805532,e46979e2,6a47bfeb,5b0348fb,27768965,55ff0632,7b815549,6139521c,7f80c488,c6ba6436,1c97f383,9fdf0210,5fc932a4,d6d3fa2d,b31dba20,d044c9f2,59495089,e43a1ece,829d5bb2,f34fbb1a,2ab1ae61,425d65fb,a55b4847,d8c02b82,3a1486ac,c6a3a5c8,762d59dd,ca992e1b,c8ddd2b5,8f0349ba,aec1c222,33c86b57,54caa28e,402e5e4d,29d16c72,e79f34a3,6bb8360a,2835325b,4a3b9ee3,f1bc9a69,c067d2e1,c02502e6,bcb62b39,33dae286,1e0e94b1,2f1f5c1b,8bcbc07c,8cd8cd6d,5b9a7862,fd6667d5,74b98a47,f0fc2259,e05e83b2,37e6ace4,930885bd,06bd12ed,b5bdc7cd,10fcbff8,413debd3,6d2b935f,fe12e24b,01f6423e,9b176c48,e1fd61f5,e454c78e,79b02359,69b9b657,c76c17ed,a141df38,341639ec,5d8691be,b62ae4fc,59009c5f,9c9fb236,d24698e7,78434d53,d5111ceb,f40878f4,bd491f30,6a5615d0,867825fa,271ecd3f,9ac5d253,9871bb52,1af2277c,9fd6a3f8,b1ce1f69,731b10eb,1244813a,3fb88e82,66b8714b,3c0fa96d,f6db1b6c,f4a63e74,d2933fe7,584f7c3e,d05306fa,ccf5a550,330d5dc6,d857df66,e3a34397,ed707dd2,d5e9eb08,bbd74fec,8476d42a,cef7c87b,a6476375,4e103796,2792a23e,66559484,1f94e8b8,95d42068,9cd9fe4f,6a057e98,429d5094,736edb0a,a94ae3af,4c293732,b3ccdf52,3a1836cd,9f8a1c31,0572fd95,e5d226b4,57636ec7,9e154009,b9f296b2,323902f9,2dc9b1ad,6f2742f9,fcac6494,53ba7a01,36162c29,6adcdb22,903039b2,f31dc733,4ae818f1,d1243d86,301d92ae,81916db1,80ca39ac,bb8d24c2,af1b4f27,dd0fdb7b,2ac0d555,c59948b5,09505d70,9d193f29,c11ee8e4,35e0e897,6b2fee29,ca854ab8,09f92e0e,47715fe7,28b0658c,9949082d,8024894c,f4f15f9f,b4a74dee,662cd2ba,4fad5606,7c3d6ce9,58c9de27,3504df94,b5142ea4,694089ef,9ddc2d56,690f2d6d,6707bd2a,e54e5cd7,dcb783a7,0ad4da57,cc521333,6c31bf77,1b2e204c,3cd5a74b,6069e3b7,b53149cc,ffd5bceb,f64ec2d6,1b767f18,841db032,01fec8f4,c63fe023,244540d3,dbaa05b0,bbebceeb,a47251b7,dea90210,af53be03,ccb1fd44,5eb95998,19df4eef,77fbac1e,dd1a9d00,745b22a2,259704c7,666b91f2,05f163fc,d510de46,b9a2d6b1,6049e2a6,508b646e,076ab5f1,94348022,22144e2e,be2c5aa9,eb11932b,58309e80,a47040eb,4d2de33c,433024fd,4a75dd43,ef788e89,72a48126,c23f5f2e,3aff20c2,9bc819aa,d653b931,f0c3f591,f3723758,5d715ade,d4a02c52,8415b744,bf06841b,9a38604b,44ef378e,3a77cc08,41a84637,df589bcd,2acc3593,6f03884a,9fc6f051,a7f313b3,51f6ce15,22452cb1,48eeec19,09dce00d,da5876c8,d4adfbf4,b2b2b8af,1b2fb0c2,137ebac2,66a75e2a,00aa4b6c,15d85701,20d7f27a,aa473a18,bc66b379&filters.utcDate.gte=2015-04-24&compact=1",
        [
            200
            { 'Content-Type': 'application/json' }
            require('./fixtures/status_cube.coffee')
        ]
