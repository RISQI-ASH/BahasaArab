import labo from "../Asset/Labo.svg";
import aula from "../Asset/aula.svg";
import kantor from "../Asset/Kantor.svg";
import wc from "../Asset/Wc.svg";
import Kelas from "../Asset/Kelas.svg";


const questions = [
    {
        questionText: "Aisyah ingin melihat koleksi buku di ?",
        answerOptions : [
            { answerText:"مَكْتَبَةٌ : Maktabatun", isCorrect: true },
            { answerText:"دَوْرَةُ مِيَاهُ : Dauroltu Miyyah", isCorrect: false },
            { answerText:"مَكْتَبٌ : Maktabun", isCorrect: false },
            { answerText:"مَقْصَفٌ : Maqshof", isCorrect: false },
        ],
    },
    {
        questionText: "Andi beriman bola di ?",
        answerOptions : [
            { answerText:"مَعْمَلٌ : Ma'mal", isCorrect: false },
            { answerText:"مَكْتَبَةٌ : Maktab", isCorrect: false },
            { answerText:"مَلْعَبٌ : Mal'ab", isCorrect: true },
            { answerText:": وَحْدَةٌ صِحِّيَّةٌ : Wahdatun Shihiyati", isCorrect: false },
        ],
    },
    {
        questionText: "Zaki menunaikan sholat dzuhur di ?",
        answerOptions : [
            { answerText:"مَسْجِد : masjidun", isCorrect: true },
            { answerText:"مَكْتَبَةٌ : Maktabatun", isCorrect: false },
            { answerText:"مَلْعَبٌ : Mal'ab", isCorrect: false },
            { answerText:"قَاعَةٌ : Qoo'ah", isCorrect: false },
        ],
    },
    {
        questionText: "siswa menanam tumbuhan di ?.",
        answerOptions : [
            { answerText:"مَقْصَفٌ: maqsofun", isCorrect: false },
            { answerText:" دَوْرَةُ مِيَاهُ: Dauroltu Miyyah" , isCorrect: false },
            { answerText:"سَاحَةٌ/فِنَاءُالْمَدْرَسَةِ : Saahatun/Finaaul Madrosah", isCorrect: true },
            { answerText:"فَصْلٌ : Fasl", isCorrect: false },
        ],
    },
    {
        questionText: "Ahmad ingin membeli makanan di ? .",
        answerOptions : [
            { answerText:"مَقْصَفٌ : Maqshof ", isCorrect: true },
            { answerText:"قَاعَةٌ : Qoo'ah", isCorrect: false },
            { answerText:"مَسْجِد : masjidun", isCorrect: false },
            { answerText:"فَصْلٌ : Fasl", isCorrect: false },
        ],
    },
    {   
        image: labo,
        questionText: "Bahasa arab dari gambar di atas adalah ? .",
        answerOptions : [
            { answerText:"قَلَـمٌ: qolamun", isCorrect: false },
            { answerText:"مَعْمَلٌ : Ma'mal", isCorrect: true },
            { answerText:"مَكْتَبَةٌ : Maktab", isCorrect: false },
            { answerText:"فَصْلٌ : Fasl", isCorrect: false },
        ],
    },
    {
        image: aula,
        questionText: "Bahasa arab dari gambar di atas adalah ? ",
        answerOptions : [
            { answerText:"كِـتَابٌ : kitaabun", isCorrect: false },
            { answerText:"تِلْمِيْذٌ : Tilmiidzun", isCorrect: false },
            { answerText:"دَوْرَةُ مِيَاهُ : Dauroltu Miyyah", isCorrect: false },
            { answerText:"قَاعَةٌ : Qoo'ah", isCorrect: true },
        ],
    },
    {
        image: kantor,
        questionText: "Bahasa arab dari gambar di atas adalah ? ",
        answerOptions : [
            { answerText:"كُـرْسِيٌّ : kursiyyun", isCorrect: false },
            { answerText:"اِدَارَةٌ: idaaroh", isCorrect: true },
            { answerText:": مَلْعَبٌ : Mal'ab", isCorrect: false },
            { answerText:"مَسْجِد : masjid", isCorrect: false },
        ],
    },
    {
        image: wc,
        questionText: "Bahasa arab dari gambar di atas adalah ? .",
        answerOptions : [
            { answerText:"قَاعَةٌ : Qoo'ah", isCorrect: false },
            { answerText:"فَصْلٌ : Fasl", isCorrect: false },
            { answerText:"دَوْرَةُ مِيَاهُ : Dauroltu Miyyah", isCorrect: true },
            { answerText:"مَلْعَبٌ : Mal'ab", isCorrect: false },
        ],
    },
    {
        image: Kelas,
        questionText: "Bahasa arab dari gambar di atas adalah ? ",
        answerOptions : [
            { answerText:"مَكْتَبَةٌ : Maktabatun", isCorrect: false },
            { answerText:" مَعْمَلٌ : Ma'mal", isCorrect: false },
            { answerText:"مَقْصَفٌ : Maqshof", isCorrect: false },
            { answerText:" فَصْلٌ : Fasl", isCorrect: true },
        ],
    },

]

export default questions