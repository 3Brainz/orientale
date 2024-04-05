import CustomMap from "@/components/CustomMap";
import FindingsMap from "@/components/FindingsMap";
import { Box } from "@mui/material";
import { Map, Marker, Overlay, Point } from "pigeon-maps";
import { useState } from "react";

export default async function Index() {
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      {/* <CustomMap></CustomMap> */}
      <FindingsMap
        findings={[
          {
            id: 0,
            coordinates: {
              latitude: 42.01887095719195,
              longitude: 13.804416141064621,
            },
          },
          {
            id: 1,
            coordinates: {
              latitude: 42.14234313861649,
              longitude: 11.712431768477881,
            },
          },
          {
            id: 2,
            coordinates: {
              latitude: 42.16332385088813,
              longitude: 13.340323698150893,
            },
          },
          {
            id: 3,
            coordinates: {
              latitude: 42.468289866367236,
              longitude: 13.85232935303338,
            },
          },
          {
            id: 4,
            coordinates: {
              latitude: 42.658603494671105,
              longitude: 12.986342157233034,
            },
          },
          {
            id: 5,
            coordinates: {
              latitude: 42.18076138930059,
              longitude: 13.330647277596821,
            },
          },
          {
            id: 6,
            coordinates: {
              latitude: 41.86911244571913,
              longitude: 12.884310838014356,
            },
          },
          {
            id: 7,
            coordinates: {
              latitude: 43.327947301752104,
              longitude: 11.672396422807818,
            },
          },
          {
            id: 8,
            coordinates: {
              latitude: 43.10050984266833,
              longitude: 13.117000133175006,
            },
          },
          {
            id: 9,
            coordinates: {
              latitude: 42.754034323598475,
              longitude: 11.793551705459317,
            },
          },
          {
            id: 10,
            coordinates: {
              latitude: 43.199640983954126,
              longitude: 12.109132692584579,
            },
          },
          {
            id: 11,
            coordinates: {
              latitude: 41.70476156502638,
              longitude: 12.152958225350705,
            },
          },
          {
            id: 12,
            coordinates: {
              latitude: 43.10153575971657,
              longitude: 12.925549369831359,
            },
          },
          {
            id: 13,
            coordinates: {
              latitude: 42.07313663542503,
              longitude: 13.478480429207536,
            },
          },
          {
            id: 14,
            coordinates: {
              latitude: 42.82846154584666,
              longitude: 13.623572118326818,
            },
          },
          {
            id: 15,
            coordinates: {
              latitude: 42.60164498172365,
              longitude: 12.483810351252892,
            },
          },
          {
            id: 16,
            coordinates: {
              latitude: 42.76933513615517,
              longitude: 11.74239801002362,
            },
          },
          {
            id: 17,
            coordinates: {
              latitude: 41.7959453881111,
              longitude: 12.844113920844496,
            },
          },
          {
            id: 18,
            coordinates: {
              latitude: 43.264709816955815,
              longitude: 12.460193897588722,
            },
          },
          {
            id: 19,
            coordinates: {
              latitude: 42.6703830574046,
              longitude: 13.752838564370759,
            },
          },
          {
            id: 20,
            coordinates: {
              latitude: 43.049906389933696,
              longitude: 12.541411599313982,
            },
          },
          {
            id: 21,
            coordinates: {
              latitude: 42.95502419072493,
              longitude: 13.870916511894958,
            },
          },
          {
            id: 22,
            coordinates: {
              latitude: 43.38838195478104,
              longitude: 12.192074883568116,
            },
          },
          {
            id: 23,
            coordinates: {
              latitude: 43.084960313095124,
              longitude: 12.718227476853297,
            },
          },
          {
            id: 24,
            coordinates: {
              latitude: 42.195221796343915,
              longitude: 12.051540585754793,
            },
          },
          {
            id: 25,
            coordinates: {
              latitude: 42.93268256351878,
              longitude: 12.365889560864552,
            },
          },
          {
            id: 26,
            coordinates: {
              latitude: 41.93259999541486,
              longitude: 11.842533965989306,
            },
          },
          {
            id: 27,
            coordinates: {
              latitude: 41.88496016458648,
              longitude: 11.68575456120136,
            },
          },
          {
            id: 28,
            coordinates: {
              latitude: 42.25559609138141,
              longitude: 11.85203212883415,
            },
          },
          {
            id: 29,
            coordinates: {
              latitude: 42.14307655157253,
              longitude: 12.062176535080216,
            },
          },
          {
            id: 30,
            coordinates: {
              latitude: 42.99897439473491,
              longitude: 11.57120209877804,
            },
          },
          {
            id: 31,
            coordinates: {
              latitude: 42.53923574170128,
              longitude: 12.266528699300432,
            },
          },
          {
            id: 32,
            coordinates: {
              latitude: 42.711385252614235,
              longitude: 11.677998359137389,
            },
          },
          {
            id: 33,
            coordinates: {
              latitude: 41.81033328127638,
              longitude: 13.95260681301541,
            },
          },
          {
            id: 34,
            coordinates: {
              latitude: 43.44950821498095,
              longitude: 11.964250239775259,
            },
          },
          {
            id: 35,
            coordinates: {
              latitude: 41.79334787653038,
              longitude: 12.30412245977793,
            },
          },
          {
            id: 36,
            coordinates: {
              latitude: 42.161059096706005,
              longitude: 11.5118802237439,
            },
          },
          {
            id: 37,
            coordinates: {
              latitude: 43.229647999739484,
              longitude: 11.861562305638142,
            },
          },
          {
            id: 38,
            coordinates: {
              latitude: 41.90177918324368,
              longitude: 13.989670749985066,
            },
          },
          {
            id: 39,
            coordinates: {
              latitude: 42.307091899603726,
              longitude: 13.288700211370658,
            },
          },
          {
            id: 40,
            coordinates: {
              latitude: 42.77987547872261,
              longitude: 11.929489652409139,
            },
          },
          {
            id: 41,
            coordinates: {
              latitude: 41.89628826975598,
              longitude: 12.251724165169815,
            },
          },
          {
            id: 42,
            coordinates: {
              latitude: 42.253081028265754,
              longitude: 12.386146449281178,
            },
          },
          {
            id: 43,
            coordinates: {
              latitude: 43.22413357367319,
              longitude: 13.181899546523447,
            },
          },
          {
            id: 44,
            coordinates: {
              latitude: 43.02849687012297,
              longitude: 13.288181476069932,
            },
          },
          {
            id: 45,
            coordinates: {
              latitude: 43.42543372945162,
              longitude: 13.525314240050148,
            },
          },
          {
            id: 46,
            coordinates: {
              latitude: 43.43411106245409,
              longitude: 11.97631758423234,
            },
          },
          {
            id: 47,
            coordinates: {
              latitude: 41.772760951805445,
              longitude: 12.205488352627182,
            },
          },
          {
            id: 48,
            coordinates: {
              latitude: 42.95520520468083,
              longitude: 13.292000041085464,
            },
          },
          {
            id: 49,
            coordinates: {
              latitude: 43.44766716193291,
              longitude: 12.761394238539104,
            },
          },
          {
            id: 50,
            coordinates: {
              latitude: 42.111099828276274,
              longitude: 13.691000177056367,
            },
          },
          {
            id: 51,
            coordinates: {
              latitude: 43.43196524903244,
              longitude: 12.76188617048327,
            },
          },
          {
            id: 52,
            coordinates: {
              latitude: 43.16541919810377,
              longitude: 12.822536745870734,
            },
          },
          {
            id: 53,
            coordinates: {
              latitude: 41.86115828674244,
              longitude: 11.941696913512573,
            },
          },
          {
            id: 54,
            coordinates: {
              latitude: 43.47809353640636,
              longitude: 13.07709877671369,
            },
          },
          {
            id: 55,
            coordinates: {
              latitude: 42.14240705393024,
              longitude: 12.90584692774106,
            },
          },
          {
            id: 56,
            coordinates: {
              latitude: 41.55530763516666,
              longitude: 11.72693441357894,
            },
          },
          {
            id: 57,
            coordinates: {
              latitude: 43.207291970134534,
              longitude: 13.80648040289337,
            },
          },
          {
            id: 58,
            coordinates: {
              latitude: 42.00682520503427,
              longitude: 13.045279291773287,
            },
          },
          {
            id: 59,
            coordinates: {
              latitude: 41.787713311922914,
              longitude: 12.994728919174282,
            },
          },
          {
            id: 60,
            coordinates: {
              latitude: 42.75436703082015,
              longitude: 12.482761592042229,
            },
          },
          {
            id: 61,
            coordinates: {
              latitude: 42.40491129973828,
              longitude: 13.397381785299842,
            },
          },
          {
            id: 62,
            coordinates: {
              latitude: 43.18530637087484,
              longitude: 11.53408071286786,
            },
          },
          {
            id: 63,
            coordinates: {
              latitude: 42.868068763889916,
              longitude: 11.867317003131213,
            },
          },
          {
            id: 64,
            coordinates: {
              latitude: 41.72176551014725,
              longitude: 13.497078792773996,
            },
          },
          {
            id: 65,
            coordinates: {
              latitude: 42.497200960267406,
              longitude: 12.078069454549832,
            },
          },
          {
            id: 66,
            coordinates: {
              latitude: 43.25364571147132,
              longitude: 13.474534357057731,
            },
          },
          {
            id: 67,
            coordinates: {
              latitude: 43.10596852956286,
              longitude: 12.557757397428356,
            },
          },
          {
            id: 68,
            coordinates: {
              latitude: 41.75753740551611,
              longitude: 12.080073592668409,
            },
          },
          {
            id: 69,
            coordinates: {
              latitude: 42.07741508827471,
              longitude: 11.563147483182755,
            },
          },
          {
            id: 70,
            coordinates: {
              latitude: 43.309681169334915,
              longitude: 11.890734249461698,
            },
          },
          {
            id: 71,
            coordinates: {
              latitude: 42.870612343550874,
              longitude: 12.952439664442327,
            },
          },
          {
            id: 72,
            coordinates: {
              latitude: 41.95587361032917,
              longitude: 12.019531892658662,
            },
          },
          {
            id: 73,
            coordinates: {
              latitude: 43.018235262290446,
              longitude: 12.85080086288377,
            },
          },
          {
            id: 74,
            coordinates: {
              latitude: 41.818831848058096,
              longitude: 12.63004116311561,
            },
          },
          {
            id: 75,
            coordinates: {
              latitude: 43.33288527035165,
              longitude: 11.579154434256457,
            },
          },
          {
            id: 76,
            coordinates: {
              latitude: 41.6398847891708,
              longitude: 12.425437744044983,
            },
          },
          {
            id: 77,
            coordinates: {
              latitude: 42.397748440705755,
              longitude: 12.282338143895826,
            },
          },
          {
            id: 78,
            coordinates: {
              latitude: 42.57408921417622,
              longitude: 11.767474001250948,
            },
          },
          {
            id: 79,
            coordinates: {
              latitude: 42.16733589546034,
              longitude: 11.954734370803509,
            },
          },
          {
            id: 80,
            coordinates: {
              latitude: 42.53655391962235,
              longitude: 12.644734484884555,
            },
          },
          {
            id: 81,
            coordinates: {
              latitude: 42.23313829125762,
              longitude: 12.639167342616553,
            },
          },
          {
            id: 82,
            coordinates: {
              latitude: 42.093211998938266,
              longitude: 12.698848009600129,
            },
          },
          {
            id: 83,
            coordinates: {
              latitude: 43.39876364603535,
              longitude: 12.469762295591995,
            },
          },
          {
            id: 84,
            coordinates: {
              latitude: 42.26262624887807,
              longitude: 12.439949871478733,
            },
          },
          {
            id: 85,
            coordinates: {
              latitude: 41.68709798595199,
              longitude: 13.612428699333751,
            },
          },
          {
            id: 86,
            coordinates: {
              latitude: 42.40528091737178,
              longitude: 13.877712752256326,
            },
          },
          {
            id: 87,
            coordinates: {
              latitude: 41.600846384398906,
              longitude: 12.529597880711774,
            },
          },
          {
            id: 88,
            coordinates: {
              latitude: 42.70706659478866,
              longitude: 13.493452318166524,
            },
          },
          {
            id: 89,
            coordinates: {
              latitude: 42.15302759313391,
              longitude: 13.109025249053424,
            },
          },
          {
            id: 90,
            coordinates: {
              latitude: 42.19981866323879,
              longitude: 12.037468553541705,
            },
          },
          {
            id: 91,
            coordinates: {
              latitude: 42.689752675972834,
              longitude: 13.371234952741737,
            },
          },
          {
            id: 92,
            coordinates: {
              latitude: 41.58199006947943,
              longitude: 11.847513338120375,
            },
          },
          {
            id: 93,
            coordinates: {
              latitude: 42.9743295532872,
              longitude: 12.06500421327169,
            },
          },
          {
            id: 94,
            coordinates: {
              latitude: 43.05605198373965,
              longitude: 11.858025085401042,
            },
          },
          {
            id: 95,
            coordinates: {
              latitude: 41.995304875252266,
              longitude: 13.522014637675307,
            },
          },
          {
            id: 96,
            coordinates: {
              latitude: 42.970289394753564,
              longitude: 12.539173901874776,
            },
          },
          {
            id: 97,
            coordinates: {
              latitude: 43.40082459138907,
              longitude: 13.490614306202838,
            },
          },
          {
            id: 98,
            coordinates: {
              latitude: 42.93185545687147,
              longitude: 13.73534883779379,
            },
          },
          {
            id: 99,
            coordinates: {
              latitude: 42.44067544849883,
              longitude: 13.97698395705754,
            },
          },
          {
            id: 100,
            coordinates: {
              latitude: 41.525329947306524,
              longitude: 13.175219474049285,
            },
          },
          {
            id: 101,
            coordinates: {
              latitude: 41.94442250156481,
              longitude: 12.137750322098533,
            },
          },
          {
            id: 102,
            coordinates: {
              latitude: 42.81608876692847,
              longitude: 13.125029078777732,
            },
          },
          {
            id: 103,
            coordinates: {
              latitude: 41.84430803298622,
              longitude: 11.632646639500624,
            },
          },
          {
            id: 104,
            coordinates: {
              latitude: 42.127759548442555,
              longitude: 13.748952602843158,
            },
          },
          {
            id: 105,
            coordinates: {
              latitude: 41.523042787153045,
              longitude: 13.067840704901826,
            },
          },
          {
            id: 106,
            coordinates: {
              latitude: 43.31902139813292,
              longitude: 11.846832586403016,
            },
          },
          {
            id: 107,
            coordinates: {
              latitude: 42.0247580984661,
              longitude: 12.429118867981392,
            },
          },
          {
            id: 108,
            coordinates: {
              latitude: 42.85657000012527,
              longitude: 12.213947468329513,
            },
          },
          {
            id: 109,
            coordinates: {
              latitude: 43.03823564134121,
              longitude: 13.87317792106507,
            },
          },
          {
            id: 110,
            coordinates: {
              latitude: 41.86127047957255,
              longitude: 13.52486221661636,
            },
          },
          {
            id: 111,
            coordinates: {
              latitude: 42.165595618594445,
              longitude: 12.03741115756654,
            },
          },
          {
            id: 112,
            coordinates: {
              latitude: 43.40766518689185,
              longitude: 13.171980051160203,
            },
          },
          {
            id: 113,
            coordinates: {
              latitude: 42.351887910265596,
              longitude: 11.927737386325116,
            },
          },
          {
            id: 114,
            coordinates: {
              latitude: 41.51629005638666,
              longitude: 11.827707622241515,
            },
          },
          {
            id: 115,
            coordinates: {
              latitude: 43.2865472972555,
              longitude: 12.167439167411786,
            },
          },
          {
            id: 116,
            coordinates: {
              latitude: 42.99424423210422,
              longitude: 11.79476461793016,
            },
          },
          {
            id: 117,
            coordinates: {
              latitude: 43.15776226970543,
              longitude: 13.919802805420428,
            },
          },
          {
            id: 118,
            coordinates: {
              latitude: 42.80400561592805,
              longitude: 12.232675127233179,
            },
          },
          {
            id: 119,
            coordinates: {
              latitude: 42.32132527104002,
              longitude: 12.280613462704958,
            },
          },
          {
            id: 120,
            coordinates: {
              latitude: 41.59254841800594,
              longitude: 12.545697848954365,
            },
          },
          {
            id: 121,
            coordinates: {
              latitude: 42.945878991586376,
              longitude: 13.790800238904907,
            },
          },
          {
            id: 122,
            coordinates: {
              latitude: 42.29385590211608,
              longitude: 13.993834833861813,
            },
          },
          {
            id: 123,
            coordinates: {
              latitude: 42.886021578345556,
              longitude: 12.60400418196494,
            },
          },
          {
            id: 124,
            coordinates: {
              latitude: 42.78511596533346,
              longitude: 11.595892436597039,
            },
          },
          {
            id: 125,
            coordinates: {
              latitude: 42.449703776217106,
              longitude: 13.919252001725937,
            },
          },
          {
            id: 126,
            coordinates: {
              latitude: 41.688488027141304,
              longitude: 11.54751892892815,
            },
          },
          {
            id: 127,
            coordinates: {
              latitude: 42.389580589462064,
              longitude: 12.800775523518153,
            },
          },
          {
            id: 128,
            coordinates: {
              latitude: 41.58546680274886,
              longitude: 11.742695588120386,
            },
          },
          {
            id: 129,
            coordinates: {
              latitude: 43.0120353456357,
              longitude: 12.340170454161248,
            },
          },
          {
            id: 130,
            coordinates: {
              latitude: 43.1684342206826,
              longitude: 13.871840785295955,
            },
          },
          {
            id: 131,
            coordinates: {
              latitude: 42.644264821748564,
              longitude: 11.915301623856104,
            },
          },
          {
            id: 132,
            coordinates: {
              latitude: 42.46506455811995,
              longitude: 13.558479720926007,
            },
          },
          {
            id: 133,
            coordinates: {
              latitude: 41.75568401516797,
              longitude: 13.117052012813376,
            },
          },
          {
            id: 134,
            coordinates: {
              latitude: 43.2132780929292,
              longitude: 12.156460876285687,
            },
          },
          {
            id: 135,
            coordinates: {
              latitude: 42.37150009699146,
              longitude: 12.963037009255228,
            },
          },
          {
            id: 136,
            coordinates: {
              latitude: 43.375584857341245,
              longitude: 13.50869324581112,
            },
          },
          {
            id: 137,
            coordinates: {
              latitude: 41.66268605073102,
              longitude: 13.247440433062179,
            },
          },
          {
            id: 138,
            coordinates: {
              latitude: 42.71792947957016,
              longitude: 11.962567676362395,
            },
          },
          {
            id: 139,
            coordinates: {
              latitude: 42.42487168268233,
              longitude: 13.33571774730173,
            },
          },
          {
            id: 140,
            coordinates: {
              latitude: 42.8415465336261,
              longitude: 13.6877206019732,
            },
          },
          {
            id: 141,
            coordinates: {
              latitude: 42.33793393220506,
              longitude: 12.388041012182393,
            },
          },
          {
            id: 142,
            coordinates: {
              latitude: 42.89822970983916,
              longitude: 13.91987321642557,
            },
          },
          {
            id: 143,
            coordinates: {
              latitude: 42.48759686640963,
              longitude: 12.923022035061173,
            },
          },
          {
            id: 144,
            coordinates: {
              latitude: 42.399758116454066,
              longitude: 12.851198382003975,
            },
          },
          {
            id: 145,
            coordinates: {
              latitude: 42.40483357605944,
              longitude: 13.219929400928,
            },
          },
          {
            id: 146,
            coordinates: {
              latitude: 43.41263044286974,
              longitude: 12.734370929658528,
            },
          },
          {
            id: 147,
            coordinates: {
              latitude: 42.94634410991922,
              longitude: 11.55909885054592,
            },
          },
          {
            id: 148,
            coordinates: {
              latitude: 42.88308930447063,
              longitude: 12.01342627356575,
            },
          },
          {
            id: 149,
            coordinates: {
              latitude: 41.62114953420087,
              longitude: 12.880990945053359,
            },
          },
          {
            id: 150,
            coordinates: {
              latitude: 42.810766526463695,
              longitude: 12.253283970853378,
            },
          },
          {
            id: 151,
            coordinates: {
              latitude: 43.229081745908964,
              longitude: 12.527444784054556,
            },
          },
          {
            id: 152,
            coordinates: {
              latitude: 41.9724524562713,
              longitude: 12.321203190507406,
            },
          },
          {
            id: 153,
            coordinates: {
              latitude: 43.24062310336093,
              longitude: 13.649657715829616,
            },
          },
          {
            id: 154,
            coordinates: {
              latitude: 41.82214573953391,
              longitude: 12.68586137107624,
            },
          },
          {
            id: 155,
            coordinates: {
              latitude: 43.069144843197165,
              longitude: 13.055068936660772,
            },
          },
          {
            id: 156,
            coordinates: {
              latitude: 41.52384424631121,
              longitude: 12.194894030779405,
            },
          },
          {
            id: 157,
            coordinates: {
              latitude: 41.71113698701113,
              longitude: 12.931787273868647,
            },
          },
          {
            id: 158,
            coordinates: {
              latitude: 42.524460465871805,
              longitude: 11.665584031603302,
            },
          },
          {
            id: 159,
            coordinates: {
              latitude: 42.74102234861831,
              longitude: 13.103785446666205,
            },
          },
          {
            id: 160,
            coordinates: {
              latitude: 41.80675821163055,
              longitude: 12.582581468464994,
            },
          },
          {
            id: 161,
            coordinates: {
              latitude: 41.78856883433329,
              longitude: 12.96354891117756,
            },
          },
          {
            id: 162,
            coordinates: {
              latitude: 42.07241491362947,
              longitude: 12.335028251947511,
            },
          },
          {
            id: 163,
            coordinates: {
              latitude: 42.73453412316336,
              longitude: 13.561165383352254,
            },
          },
          {
            id: 164,
            coordinates: {
              latitude: 41.54118967247278,
              longitude: 11.932265400139674,
            },
          },
          {
            id: 165,
            coordinates: {
              latitude: 42.60351641989508,
              longitude: 11.511354186662926,
            },
          },
          {
            id: 166,
            coordinates: {
              latitude: 43.442668556906234,
              longitude: 13.256564558840505,
            },
          },
          {
            id: 167,
            coordinates: {
              latitude: 43.12564491477242,
              longitude: 11.837346247572576,
            },
          },
          {
            id: 168,
            coordinates: {
              latitude: 41.652355055580216,
              longitude: 12.242064460119753,
            },
          },
          {
            id: 169,
            coordinates: {
              latitude: 42.12269646002917,
              longitude: 11.685070484383091,
            },
          },
          {
            id: 170,
            coordinates: {
              latitude: 43.49973284486314,
              longitude: 12.739430153135098,
            },
          },
          {
            id: 171,
            coordinates: {
              latitude: 41.87100725849507,
              longitude: 13.376734744490545,
            },
          },
          {
            id: 172,
            coordinates: {
              latitude: 42.04191863911256,
              longitude: 12.8972805098202,
            },
          },
          {
            id: 173,
            coordinates: {
              latitude: 42.826263510903125,
              longitude: 12.762014069174803,
            },
          },
          {
            id: 174,
            coordinates: {
              latitude: 43.3456742149224,
              longitude: 13.74354397908733,
            },
          },
          {
            id: 175,
            coordinates: {
              latitude: 42.093363011117866,
              longitude: 13.48182963438448,
            },
          },
          {
            id: 176,
            coordinates: {
              latitude: 42.102419040067325,
              longitude: 12.677467797954284,
            },
          },
          {
            id: 177,
            coordinates: {
              latitude: 42.08293819387249,
              longitude: 12.63751255201327,
            },
          },
          {
            id: 178,
            coordinates: {
              latitude: 42.28390941799102,
              longitude: 13.929005614744494,
            },
          },
          {
            id: 179,
            coordinates: {
              latitude: 41.83503821722311,
              longitude: 13.734430120681667,
            },
          },
          {
            id: 180,
            coordinates: {
              latitude: 41.85096716781798,
              longitude: 12.661936509935837,
            },
          },
          {
            id: 181,
            coordinates: {
              latitude: 41.79316224525648,
              longitude: 11.53070030200698,
            },
          },
          {
            id: 182,
            coordinates: {
              latitude: 41.9184932784088,
              longitude: 13.001532155789931,
            },
          },
          {
            id: 183,
            coordinates: {
              latitude: 42.76871427607252,
              longitude: 11.621743977187194,
            },
          },
          {
            id: 184,
            coordinates: {
              latitude: 43.066079887244996,
              longitude: 13.61041421974927,
            },
          },
          {
            id: 185,
            coordinates: {
              latitude: 43.29845468215018,
              longitude: 11.648258734549849,
            },
          },
          {
            id: 186,
            coordinates: {
              latitude: 41.53055585767998,
              longitude: 12.64742257472059,
            },
          },
          {
            id: 187,
            coordinates: {
              latitude: 42.27375705410138,
              longitude: 13.794367653803983,
            },
          },
          {
            id: 188,
            coordinates: {
              latitude: 42.330304273550155,
              longitude: 13.416088129701784,
            },
          },
          {
            id: 189,
            coordinates: {
              latitude: 42.31370362704717,
              longitude: 13.058032892618604,
            },
          },
          {
            id: 190,
            coordinates: {
              latitude: 42.518079476684875,
              longitude: 12.199624343948175,
            },
          },
          {
            id: 191,
            coordinates: {
              latitude: 42.11303139635231,
              longitude: 12.582281844195325,
            },
          },
          {
            id: 192,
            coordinates: {
              latitude: 42.577007765325064,
              longitude: 13.096126774178483,
            },
          },
          {
            id: 193,
            coordinates: {
              latitude: 42.741936240971356,
              longitude: 13.903286890686571,
            },
          },
          {
            id: 194,
            coordinates: {
              latitude: 42.67380722050839,
              longitude: 13.175611973635297,
            },
          },
          {
            id: 195,
            coordinates: {
              latitude: 43.22386433250766,
              longitude: 12.238647141314175,
            },
          },
          {
            id: 196,
            coordinates: {
              latitude: 41.6803800387198,
              longitude: 13.954423215757211,
            },
          },
          {
            id: 197,
            coordinates: {
              latitude: 43.17558394743854,
              longitude: 13.901456365126222,
            },
          },
          {
            id: 198,
            coordinates: {
              latitude: 43.28013332484866,
              longitude: 11.572314632089775,
            },
          },
          {
            id: 199,
            coordinates: {
              latitude: 41.848597657739035,
              longitude: 12.284419817099122,
            },
          },
          {
            id: 200,
            coordinates: {
              latitude: 42.03338361050937,
              longitude: 12.839802397009288,
            },
          },
          {
            id: 201,
            coordinates: {
              latitude: 42.763249686548974,
              longitude: 11.683619641389113,
            },
          },
          {
            id: 202,
            coordinates: {
              latitude: 41.858836442181534,
              longitude: 13.870366307027382,
            },
          },
          {
            id: 203,
            coordinates: {
              latitude: 42.92318567274393,
              longitude: 13.943806289535015,
            },
          },
          {
            id: 204,
            coordinates: {
              latitude: 42.27700518869678,
              longitude: 11.895200333878027,
            },
          },
          {
            id: 205,
            coordinates: {
              latitude: 42.15926267463552,
              longitude: 11.677585189812199,
            },
          },
          {
            id: 206,
            coordinates: {
              latitude: 42.625845877655955,
              longitude: 12.953916972086597,
            },
          },
          {
            id: 207,
            coordinates: {
              latitude: 42.76397199765756,
              longitude: 13.301228613399221,
            },
          },
          {
            id: 208,
            coordinates: {
              latitude: 43.41831168817458,
              longitude: 11.641374577460375,
            },
          },
          {
            id: 209,
            coordinates: {
              latitude: 43.30178322636037,
              longitude: 11.761544042377658,
            },
          },
          {
            id: 210,
            coordinates: {
              latitude: 41.70625670224611,
              longitude: 12.179433682359223,
            },
          },
          {
            id: 211,
            coordinates: {
              latitude: 41.543114965730844,
              longitude: 12.681038704245017,
            },
          },
          {
            id: 212,
            coordinates: {
              latitude: 44.38594187539485,
              longitude: 7.546403302370139,
            },
          },
          {
            id: 213,
            coordinates: {
              latitude: 41.69857613779496,
              longitude: 13.222103988322177,
            },
          },
          {
            id: 214,
            coordinates: {
              latitude: 42.22822151527584,
              longitude: 12.548635925046696,
            },
          },
          {
            id: 215,
            coordinates: {
              latitude: 42.04950348679964,
              longitude: 11.550582258543509,
            },
          },
          {
            id: 216,
            coordinates: {
              latitude: 41.70393681381185,
              longitude: 11.609226654371868,
            },
          },
          {
            id: 217,
            coordinates: {
              latitude: 42.2456230636935,
              longitude: 13.037086071305755,
            },
          },
          {
            id: 218,
            coordinates: {
              latitude: 43.19597579577454,
              longitude: 12.772260525940077,
            },
          },
          {
            id: 219,
            coordinates: {
              latitude: 43.01895211096413,
              longitude: 13.643817138014748,
            },
          },
          {
            id: 220,
            coordinates: {
              latitude: 42.459072612876824,
              longitude: 13.820312035104584,
            },
          },
          {
            id: 221,
            coordinates: {
              latitude: 41.71082413463279,
              longitude: 12.456606812664113,
            },
          },
          {
            id: 222,
            coordinates: {
              latitude: 42.45977864859091,
              longitude: 13.104025379547178,
            },
          },
          {
            id: 223,
            coordinates: {
              latitude: 42.844058448642876,
              longitude: 12.414202388507686,
            },
          },
          {
            id: 224,
            coordinates: {
              latitude: 42.43245404387633,
              longitude: 13.487289316089333,
            },
          },
          {
            id: 225,
            coordinates: {
              latitude: 43.07131418135388,
              longitude: 12.555686943915202,
            },
          },
          {
            id: 226,
            coordinates: {
              latitude: 42.223078309675564,
              longitude: 13.331550150389498,
            },
          },
          {
            id: 227,
            coordinates: {
              latitude: 43.4034044370422,
              longitude: 12.763122322558127,
            },
          },
          {
            id: 228,
            coordinates: {
              latitude: 43.359370604800205,
              longitude: 12.32021334419539,
            },
          },
          {
            id: 229,
            coordinates: {
              latitude: 42.490191385153,
              longitude: 13.952690431812007,
            },
          },
          {
            id: 230,
            coordinates: {
              latitude: 42.55677426660171,
              longitude: 12.444889217785201,
            },
          },
          {
            id: 231,
            coordinates: {
              latitude: 42.318813421578966,
              longitude: 11.956098611196103,
            },
          },
          {
            id: 232,
            coordinates: {
              latitude: 43.40915217106151,
              longitude: 11.657330155611302,
            },
          },
          {
            id: 233,
            coordinates: {
              latitude: 43.281620489563956,
              longitude: 12.966757349845377,
            },
          },
          {
            id: 234,
            coordinates: {
              latitude: 43.000611636009886,
              longitude: 13.770752894939848,
            },
          },
          {
            id: 235,
            coordinates: {
              latitude: 42.90909352812791,
              longitude: 13.27334422294595,
            },
          },
          {
            id: 236,
            coordinates: {
              latitude: 43.02282428103544,
              longitude: 12.496974153894648,
            },
          },
          {
            id: 237,
            coordinates: {
              latitude: 41.62833405246495,
              longitude: 12.055664184458253,
            },
          },
          {
            id: 238,
            coordinates: {
              latitude: 42.10240930513996,
              longitude: 13.249243118572387,
            },
          },
          {
            id: 239,
            coordinates: {
              latitude: 42.12340616455682,
              longitude: 13.490790898173305,
            },
          },
          {
            id: 240,
            coordinates: {
              latitude: 41.585967298824606,
              longitude: 13.442462156870288,
            },
          },
          {
            id: 241,
            coordinates: {
              latitude: 41.84480257415097,
              longitude: 13.903196393648862,
            },
          },
          {
            id: 242,
            coordinates: {
              latitude: 42.51733500732406,
              longitude: 13.906470428039068,
            },
          },
          {
            id: 243,
            coordinates: {
              latitude: 41.663045641444526,
              longitude: 12.463799994365461,
            },
          },
          {
            id: 244,
            coordinates: {
              latitude: 42.05740571523899,
              longitude: 13.253725010087889,
            },
          },
          {
            id: 245,
            coordinates: {
              latitude: 41.71689906446315,
              longitude: 12.864027984533793,
            },
          },
          {
            id: 246,
            coordinates: {
              latitude: 41.938405874096865,
              longitude: 12.026488942777892,
            },
          },
          {
            id: 247,
            coordinates: {
              latitude: 42.10750362453736,
              longitude: 13.657065054904486,
            },
          },
          {
            id: 248,
            coordinates: {
              latitude: 41.81401446283724,
              longitude: 12.232709569733252,
            },
          },
          {
            id: 249,
            coordinates: {
              latitude: 43.16302246888871,
              longitude: 11.534635127222504,
            },
          },
          {
            id: 250,
            coordinates: {
              latitude: 43.41285646846492,
              longitude: 13.492286189535493,
            },
          },
          {
            id: 251,
            coordinates: {
              latitude: 42.83739792607262,
              longitude: 12.785487443745529,
            },
          },
          {
            id: 252,
            coordinates: {
              latitude: 42.662011137795304,
              longitude: 11.502832555496104,
            },
          },
          {
            id: 253,
            coordinates: {
              latitude: 41.52595134866407,
              longitude: 11.865191710309169,
            },
          },
          {
            id: 254,
            coordinates: {
              latitude: 42.575984631828334,
              longitude: 13.921617028475351,
            },
          },
          {
            id: 255,
            coordinates: {
              latitude: 42.22936601836022,
              longitude: 12.747813970094784,
            },
          },
          {
            id: 256,
            coordinates: {
              latitude: 41.59021239428916,
              longitude: 12.851991507145701,
            },
          },
          {
            id: 257,
            coordinates: {
              latitude: 42.37687168241076,
              longitude: 12.476758832718543,
            },
          },
          {
            id: 258,
            coordinates: {
              latitude: 42.752021049405535,
              longitude: 13.100494765040827,
            },
          },
          {
            id: 259,
            coordinates: {
              latitude: 42.8045394178945,
              longitude: 12.229526978701388,
            },
          },
          {
            id: 260,
            coordinates: {
              latitude: 43.302905700112724,
              longitude: 12.418711419131007,
            },
          },
          {
            id: 261,
            coordinates: {
              latitude: 42.61404646085061,
              longitude: 12.357365328714401,
            },
          },
          {
            id: 262,
            coordinates: {
              latitude: 42.63929979340667,
              longitude: 13.929213299973794,
            },
          },
          {
            id: 263,
            coordinates: {
              latitude: 42.572896298651244,
              longitude: 12.163741912259773,
            },
          },
          {
            id: 264,
            coordinates: {
              latitude: 43.48072101819621,
              longitude: 12.47883637150302,
            },
          },
          {
            id: 265,
            coordinates: {
              latitude: 42.34998083982073,
              longitude: 13.979804149869153,
            },
          },
          {
            id: 266,
            coordinates: {
              latitude: 43.18585665796874,
              longitude: 12.416379606025574,
            },
          },
          {
            id: 267,
            coordinates: {
              latitude: 43.15812682193221,
              longitude: 13.936561664927698,
            },
          },
          {
            id: 268,
            coordinates: {
              latitude: 42.97285911252747,
              longitude: 13.463362831762797,
            },
          },
          {
            id: 269,
            coordinates: {
              latitude: 42.42900950106748,
              longitude: 12.211481692163082,
            },
          },
          {
            id: 270,
            coordinates: {
              latitude: 41.96166554901431,
              longitude: 11.695627009559283,
            },
          },
          {
            id: 271,
            coordinates: {
              latitude: 43.49663069534284,
              longitude: 12.812955869435836,
            },
          },
          {
            id: 272,
            coordinates: {
              latitude: 42.60837752045778,
              longitude: 13.86351937258022,
            },
          },
          {
            id: 273,
            coordinates: {
              latitude: 41.93278875670181,
              longitude: 12.619265023799228,
            },
          },
          {
            id: 274,
            coordinates: {
              latitude: 42.97219868967846,
              longitude: 13.783532267441986,
            },
          },
          {
            id: 275,
            coordinates: {
              latitude: 42.953829881753414,
              longitude: 12.080038266314585,
            },
          },
          {
            id: 276,
            coordinates: {
              latitude: 43.08584748894952,
              longitude: 13.299364599516897,
            },
          },
          {
            id: 277,
            coordinates: {
              latitude: 43.05500570880251,
              longitude: 12.525322005211287,
            },
          },
          {
            id: 278,
            coordinates: {
              latitude: 42.478282323960386,
              longitude: 13.98650488849509,
            },
          },
          {
            id: 279,
            coordinates: {
              latitude: 42.830560298163576,
              longitude: 13.260316072871207,
            },
          },
          {
            id: 280,
            coordinates: {
              latitude: 42.816116283945334,
              longitude: 12.611119753410128,
            },
          },
          {
            id: 281,
            coordinates: {
              latitude: 42.26973187033019,
              longitude: 12.056929760581939,
            },
          },
          {
            id: 282,
            coordinates: {
              latitude: 42.84227575622692,
              longitude: 13.808495790638242,
            },
          },
          {
            id: 283,
            coordinates: {
              latitude: 43.234394856241806,
              longitude: 12.052055099935897,
            },
          },
          {
            id: 284,
            coordinates: {
              latitude: 43.069830211874006,
              longitude: 12.525476909152117,
            },
          },
          {
            id: 285,
            coordinates: {
              latitude: 42.91799659628275,
              longitude: 13.769212290904482,
            },
          },
          {
            id: 286,
            coordinates: {
              latitude: 43.0164047563544,
              longitude: 12.451005787853362,
            },
          },
          {
            id: 287,
            coordinates: {
              latitude: 41.812990464416345,
              longitude: 13.789349661142916,
            },
          },
          {
            id: 288,
            coordinates: {
              latitude: 42.365236955557506,
              longitude: 13.57473261628372,
            },
          },
          {
            id: 289,
            coordinates: {
              latitude: 41.510705771511084,
              longitude: 11.56378690606356,
            },
          },
          {
            id: 290,
            coordinates: {
              latitude: 42.41569725680014,
              longitude: 12.227951876531808,
            },
          },
          {
            id: 291,
            coordinates: {
              latitude: 42.16735300039523,
              longitude: 13.110044251273344,
            },
          },
          {
            id: 292,
            coordinates: {
              latitude: 42.38830647261897,
              longitude: 12.162172675896423,
            },
          },
          {
            id: 293,
            coordinates: {
              latitude: 41.96989166811495,
              longitude: 11.96370246899614,
            },
          },
          {
            id: 294,
            coordinates: {
              latitude: 42.92932856860158,
              longitude: 12.476529813317958,
            },
          },
          {
            id: 295,
            coordinates: {
              latitude: 43.07332010282656,
              longitude: 11.683952452947144,
            },
          },
          {
            id: 296,
            coordinates: {
              latitude: 42.490894821889796,
              longitude: 11.84889774866349,
            },
          },
          {
            id: 297,
            coordinates: {
              latitude: 42.550596024737374,
              longitude: 13.495304074922377,
            },
          },
          {
            id: 298,
            coordinates: {
              latitude: 42.420463873014164,
              longitude: 12.892383728663528,
            },
          },
          {
            id: 299,
            coordinates: {
              latitude: 41.6377910291081,
              longitude: 12.231321133473884,
            },
          },
          {
            id: 300,
            coordinates: {
              latitude: 42.523662423432796,
              longitude: 12.982705836096672,
            },
          },
          {
            id: 301,
            coordinates: {
              latitude: 41.920123377495955,
              longitude: 12.635128387405226,
            },
          },
          {
            id: 302,
            coordinates: {
              latitude: 42.453434778185006,
              longitude: 13.456983589341231,
            },
          },
          {
            id: 303,
            coordinates: {
              latitude: 41.57614085821688,
              longitude: 12.903891999730186,
            },
          },
          {
            id: 304,
            coordinates: {
              latitude: 41.65758354546535,
              longitude: 13.361979900407228,
            },
          },
          {
            id: 305,
            coordinates: {
              latitude: 41.60819872837027,
              longitude: 11.78670015242739,
            },
          },
          {
            id: 306,
            coordinates: {
              latitude: 42.17554138660066,
              longitude: 11.7287676505496,
            },
          },
          {
            id: 307,
            coordinates: {
              latitude: 42.40160554987503,
              longitude: 13.068973909401473,
            },
          },
          {
            id: 308,
            coordinates: {
              latitude: 42.545711032473015,
              longitude: 12.08062120300466,
            },
          },
          {
            id: 309,
            coordinates: {
              latitude: 42.25290911723548,
              longitude: 11.58746672283955,
            },
          },
          {
            id: 310,
            coordinates: {
              latitude: 42.35715262106323,
              longitude: 12.76221904820998,
            },
          },
          {
            id: 311,
            coordinates: {
              latitude: 43.267199816015534,
              longitude: 12.999458832452502,
            },
          },
          {
            id: 312,
            coordinates: {
              latitude: 43.149037987899455,
              longitude: 13.061131616367712,
            },
          },
          {
            id: 313,
            coordinates: {
              latitude: 43.19774103072526,
              longitude: 12.607551021588627,
            },
          },
          {
            id: 314,
            coordinates: {
              latitude: 42.06217342225113,
              longitude: 11.84918353597606,
            },
          },
          {
            id: 315,
            coordinates: {
              latitude: 42.34894922817074,
              longitude: 13.43548132715212,
            },
          },
          {
            id: 316,
            coordinates: {
              latitude: 41.64720047611003,
              longitude: 13.364737841034756,
            },
          },
          {
            id: 317,
            coordinates: {
              latitude: 41.87330950532963,
              longitude: 13.209740439060374,
            },
          },
          {
            id: 318,
            coordinates: {
              latitude: 42.708700156964056,
              longitude: 13.106149942787864,
            },
          },
          {
            id: 319,
            coordinates: {
              latitude: 42.11776239656402,
              longitude: 12.074174956382809,
            },
          },
          {
            id: 320,
            coordinates: {
              latitude: 42.13059408365108,
              longitude: 12.729310657570007,
            },
          },
          {
            id: 321,
            coordinates: {
              latitude: 43.1940580452018,
              longitude: 13.948378481688462,
            },
          },
          {
            id: 322,
            coordinates: {
              latitude: 42.66189399126787,
              longitude: 12.206778070338915,
            },
          },
          {
            id: 323,
            coordinates: {
              latitude: 42.925505786711966,
              longitude: 13.943960654489503,
            },
          },
          {
            id: 324,
            coordinates: {
              latitude: 43.07639873322944,
              longitude: 13.077454441539182,
            },
          },
          {
            id: 325,
            coordinates: {
              latitude: 42.59070363440255,
              longitude: 13.037944227894954,
            },
          },
          {
            id: 326,
            coordinates: {
              latitude: 42.83176367085503,
              longitude: 11.576333302719116,
            },
          },
          {
            id: 327,
            coordinates: {
              latitude: 42.45292416338383,
              longitude: 13.80016230171124,
            },
          },
          {
            id: 328,
            coordinates: {
              latitude: 42.62112147019559,
              longitude: 11.95267484384544,
            },
          },
          {
            id: 329,
            coordinates: {
              latitude: 41.59174739858392,
              longitude: 13.250469087270174,
            },
          },
          {
            id: 330,
            coordinates: {
              latitude: 43.03358775468426,
              longitude: 13.706038976384217,
            },
          },
          {
            id: 331,
            coordinates: {
              latitude: 42.80972705893278,
              longitude: 13.157170524545156,
            },
          },
          {
            id: 332,
            coordinates: {
              latitude: 42.69163386633706,
              longitude: 12.183324172939665,
            },
          },
          {
            id: 333,
            coordinates: {
              latitude: 43.297047965902465,
              longitude: 13.88203424829446,
            },
          },
          {
            id: 334,
            coordinates: {
              latitude: 42.811808499492315,
              longitude: 12.997376628203408,
            },
          },
          {
            id: 335,
            coordinates: {
              latitude: 42.47164447466033,
              longitude: 11.74381853053136,
            },
          },
          {
            id: 336,
            coordinates: {
              latitude: 42.26267079941611,
              longitude: 11.98096278924,
            },
          },
          {
            id: 337,
            coordinates: {
              latitude: 42.333717312379854,
              longitude: 11.600029388404053,
            },
          },
          {
            id: 338,
            coordinates: {
              latitude: 42.49947151891795,
              longitude: 13.547590113700496,
            },
          },
          {
            id: 339,
            coordinates: {
              latitude: 42.02097037797439,
              longitude: 12.675069818340242,
            },
          },
          {
            id: 340,
            coordinates: {
              latitude: 42.23598632310072,
              longitude: 11.985219000886744,
            },
          },
          {
            id: 341,
            coordinates: {
              latitude: 42.4210853110987,
              longitude: 13.86515437659016,
            },
          },
          {
            id: 342,
            coordinates: {
              latitude: 41.5222333915963,
              longitude: 13.829007780791006,
            },
          },
          {
            id: 343,
            coordinates: {
              latitude: 42.09017850216301,
              longitude: 12.785736423567108,
            },
          },
          {
            id: 344,
            coordinates: {
              latitude: 43.30400989063733,
              longitude: 11.923170852571516,
            },
          },
          {
            id: 345,
            coordinates: {
              latitude: 42.089225541874534,
              longitude: 13.071285731235513,
            },
          },
          {
            id: 346,
            coordinates: {
              latitude: 41.95700846278824,
              longitude: 13.913145636110643,
            },
          },
          {
            id: 347,
            coordinates: {
              latitude: 42.415837677161576,
              longitude: 12.765285008149183,
            },
          },
          {
            id: 348,
            coordinates: {
              latitude: 42.976789103496436,
              longitude: 11.664337396491486,
            },
          },
          {
            id: 349,
            coordinates: {
              latitude: 43.33279973457825,
              longitude: 12.171316682359123,
            },
          },
          {
            id: 350,
            coordinates: {
              latitude: 41.77959496625257,
              longitude: 12.899512206282797,
            },
          },
          {
            id: 351,
            coordinates: {
              latitude: 41.993768326387666,
              longitude: 12.080045806231606,
            },
          },
          {
            id: 352,
            coordinates: {
              latitude: 41.765094477017136,
              longitude: 13.430516964661669,
            },
          },
          {
            id: 353,
            coordinates: {
              latitude: 41.90183978132655,
              longitude: 12.97632207198299,
            },
          },
          {
            id: 354,
            coordinates: {
              latitude: 42.03242403995836,
              longitude: 13.84050034453607,
            },
          },
          {
            id: 355,
            coordinates: {
              latitude: 42.40059058391416,
              longitude: 12.580506450671106,
            },
          },
          {
            id: 356,
            coordinates: {
              latitude: 41.85777551350536,
              longitude: 13.088608481294097,
            },
          },
          {
            id: 357,
            coordinates: {
              latitude: 41.69280916354509,
              longitude: 12.67791050502748,
            },
          },
          {
            id: 358,
            coordinates: {
              latitude: 42.14752598090334,
              longitude: 13.049743075279668,
            },
          },
          {
            id: 359,
            coordinates: {
              latitude: 41.668789688929,
              longitude: 12.343408812542064,
            },
          },
          {
            id: 360,
            coordinates: {
              latitude: 42.528051625945125,
              longitude: 11.804975183877772,
            },
          },
          {
            id: 361,
            coordinates: {
              latitude: 42.94650429418066,
              longitude: 13.971425776426202,
            },
          },
          {
            id: 362,
            coordinates: {
              latitude: 43.3020955412895,
              longitude: 13.31007735074682,
            },
          },
          {
            id: 363,
            coordinates: {
              latitude: 43.194120515716826,
              longitude: 12.810677631028287,
            },
          },
          {
            id: 364,
            coordinates: {
              latitude: 42.37242922463796,
              longitude: 13.890588750113988,
            },
          },
          {
            id: 365,
            coordinates: {
              latitude: 43.34597515017783,
              longitude: 12.037181887670847,
            },
          },
          {
            id: 366,
            coordinates: {
              latitude: 43.2396556164172,
              longitude: 11.696066704047317,
            },
          },
          {
            id: 367,
            coordinates: {
              latitude: 41.61775578494722,
              longitude: 13.45867725424592,
            },
          },
          {
            id: 368,
            coordinates: {
              latitude: 43.10260938383864,
              longitude: 13.910081931396796,
            },
          },
          {
            id: 369,
            coordinates: {
              latitude: 42.27867226300078,
              longitude: 11.617583602204766,
            },
          },
          {
            id: 370,
            coordinates: {
              latitude: 42.04148765940649,
              longitude: 12.46368705652915,
            },
          },
          {
            id: 371,
            coordinates: {
              latitude: 41.54591752455515,
              longitude: 12.257086895306015,
            },
          },
          {
            id: 372,
            coordinates: {
              latitude: 41.96411423352712,
              longitude: 11.729513847721353,
            },
          },
          {
            id: 373,
            coordinates: {
              latitude: 41.93482153746041,
              longitude: 12.02156373800234,
            },
          },
          {
            id: 374,
            coordinates: {
              latitude: 42.95468468769702,
              longitude: 13.032237864239127,
            },
          },
          {
            id: 375,
            coordinates: {
              latitude: 43.00094705556251,
              longitude: 12.058262753051892,
            },
          },
          {
            id: 376,
            coordinates: {
              latitude: 42.193661076887985,
              longitude: 12.472475580182177,
            },
          },
          {
            id: 377,
            coordinates: {
              latitude: 42.43173904772819,
              longitude: 13.167175353246876,
            },
          },
          {
            id: 378,
            coordinates: {
              latitude: 42.501949529002154,
              longitude: 12.502920535428805,
            },
          },
          {
            id: 379,
            coordinates: {
              latitude: 41.53337644155755,
              longitude: 13.212820678936653,
            },
          },
          {
            id: 380,
            coordinates: {
              latitude: 42.66979628464177,
              longitude: 13.349537145919324,
            },
          },
          {
            id: 381,
            coordinates: {
              latitude: 41.56461035300754,
              longitude: 13.98113713038985,
            },
          },
          {
            id: 382,
            coordinates: {
              latitude: 42.80567344393402,
              longitude: 11.626210151139832,
            },
          },
          {
            id: 383,
            coordinates: {
              latitude: 43.297206595644845,
              longitude: 11.575181083696073,
            },
          },
          {
            id: 384,
            coordinates: {
              latitude: 42.81757455278353,
              longitude: 12.467230278423786,
            },
          },
          {
            id: 385,
            coordinates: {
              latitude: 42.81366895945128,
              longitude: 13.231636420571366,
            },
          },
          {
            id: 386,
            coordinates: {
              latitude: 43.108738264126124,
              longitude: 12.154142166220531,
            },
          },
          {
            id: 387,
            coordinates: {
              latitude: 42.27699249487405,
              longitude: 13.300230732157319,
            },
          },
          {
            id: 388,
            coordinates: {
              latitude: 41.6023089723782,
              longitude: 12.276496486994152,
            },
          },
          {
            id: 389,
            coordinates: {
              latitude: 43.02983245620003,
              longitude: 13.39738972718052,
            },
          },
          {
            id: 390,
            coordinates: {
              latitude: 42.892431553139964,
              longitude: 12.398098467375865,
            },
          },
          {
            id: 391,
            coordinates: {
              latitude: 42.385537540490375,
              longitude: 13.334603460231603,
            },
          },
          {
            id: 392,
            coordinates: {
              latitude: 41.623099020436165,
              longitude: 13.797946081319942,
            },
          },
          {
            id: 393,
            coordinates: {
              latitude: 42.420553534899135,
              longitude: 13.716058966781121,
            },
          },
          {
            id: 394,
            coordinates: {
              latitude: 41.8559292169186,
              longitude: 13.065782295248741,
            },
          },
          {
            id: 395,
            coordinates: {
              latitude: 43.44816848044902,
              longitude: 13.75345092325487,
            },
          },
          {
            id: 396,
            coordinates: {
              latitude: 42.121665394995205,
              longitude: 12.284832611468048,
            },
          },
          {
            id: 397,
            coordinates: {
              latitude: 41.66007422827459,
              longitude: 13.916848326257337,
            },
          },
          {
            id: 398,
            coordinates: {
              latitude: 41.574862049940286,
              longitude: 11.88757146885416,
            },
          },
          {
            id: 399,
            coordinates: {
              latitude: 43.0339129626977,
              longitude: 11.734593325830884,
            },
          },
        ]}
      ></FindingsMap>
    </div>
  );
}
