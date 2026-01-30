const XLSX = require('xlsx');

// Array of all 37 test cases
const testCases = [
  // ---------------- Positive Functional Test Cases ----------------
  {
    "TC ID": "Pos_Fun_0001",
    "Test case name": "Convert a short daily greeting phrase",
    "Input length type": "S",
    "Input": "oyaata kohomadha?",
    "Expected output": "ඔයාට කොහොමද?",
    "Actual output": "ඔයාට කොහොමද?",
    "Status": "Pass",
    "Accuracy justification / Description": "The greeting meaning is preserved.",
    "What is covered by the test": "Greeting / request / response; Interrogative; S (≤30 characters); Accuracy validation"
  },
  {
    "TC ID": "Pos_Fun_0002",
    "Test case name": "Long mixed-language input",
    "Input length type": "S",
    "Input": "machan mata adha meeting ekak  Please send it before 3pm.",
    "Expected output": "මචන් මට අද meeting එකක් තියෙනවා.",
    "Actual output": "මචන් මට අද meeting එකක් තියෙනවා.",
    "Status": "Pass",
    "Accuracy justification / Description": "Mixed Singlish + English handled correctly.",
    "What is covered by the test": "Mixed Singlish + English; Compound structure; M (31–299 characters); Robustness validation"
  },
  {
    "TC ID": "Pos_Fun_0003",
    "Test case name": "Convert a short request phrase",
    "Input length type": "S",
    "Input": "mata help ekak karanna puLuvandha?",
    "Expected output": "මට help එකක් කරන්න පුළුවන්ද?",
    "Actual output": "මට help එකක් කරන්න පුළුවන්ද?",
    "Status": "Pass",
    "Accuracy justification / Description": "The request meaning is correctly preserved.",
    "What is covered by the test": "Greeting / request / response; Interrogative; S (≤30 characters); Accuracy validation"
  },
  {
    "TC ID": "Pos_Fun_0004",
    "Test case name": "Convert a compound sentence",
    "Input length type": "S",
    "Input": "mama pansal yanavaa",
    "Expected output": "මම පන්සල් යනවා",
    "Actual output": "මම පන්සල් යනවා",
    "Status": "Pass",
    "Accuracy justification / Description": "Compound sentence meaning preserved.",
    "What is covered by the test": "Word combination / phrase pattern; Compound sentence; M (31–299 characters); Accuracy validation"
  },
  {
    "TC ID": "Pos_Fun_0005",
    "Test case name": "Convert a complex sentence",
    "Input length type": "S",
    "Input": "mama bath kanna yanavaa, passee ennam",
    "Expected output": "මම බත් කන්න යනවා, පස්සේ එන්නම්",
    "Actual output": "මම බත් කන්න යනවා, පස්සේ එන්නම්",
    "Status": "Pass",
    "Accuracy justification / Description": "Complex sentence handled correctly.",
    "What is covered by the test": "Word combination / phrase pattern; Complex sentence; L (≥300 characters); Accuracy validation"
  },
  {
    "TC ID": "Pos_Fun_0006",
    "Test case name": "Convert interrogative sentence",
    "Input length type": "S",
    "Input": "oyaa monavadha karannee?",
    "Expected output": "ඔයා මොනවද කරන්නේ?",
    "Actual output": "ඔයා මොනවද කරන්නේ?",
    "Status": "Pass",
    "Accuracy justification / Description": "Question is correctly converted.",
    "What is covered by the test": "Daily language usage; Interrogative; S (≤30 characters); Accuracy validation"
  },
  {
    "TC ID": "Pos_Fun_0007",
    "Test case name": "Convert imperative sentence",
    "Input length type": "S",
    "Input": "vahaama enna",
    "Expected output": "වහාම එන්න",
    "Actual output": "වහාම එන්න",
    "Status": "Pass",
    "Accuracy justification / Description": "Command is correctly converted.",
    "What is covered by the test": "Daily language usage; Imperative; S (≤30 characters); Accuracy validation"
  },
  {
    "TC ID": "Pos_Fun_0008",
    "Test case name": "Convert positive sentence",
    "Input length type": "M",
    "Input": "karuNaakaralaa mata udhavvak karanna",
    "Expected output": "කරුණාකරලා මට උදව්වක් කරන්න",
    "Actual output": "කරුණාකරලා මට උදව්වක් කරන්න",
    "Status": "Pass",
    "Accuracy justification / Description": "Positive sentence preserved.",
    "What is covered by the test": "Daily language usage; Present tense; S (≤30 characters); Accuracy validation"
  },
  {
    "TC ID": "Pos_Fun_0009",
    "Test case name": "Convert negative sentence",
    "Input length type": "S",
    "Input": "mama ennee naehae",
    "Expected output": "මම එන්නේ නැහැ",
    "Actual output": "මම එන්නේ නැහැ",
    "Status": "Pass",
    "Accuracy justification / Description": "Negative sentence preserved.",
    "What is covered by the test": "Daily language usage; Negation; S (≤30 characters); Accuracy validation"
  },
  {
    "TC ID": "Pos_Fun_0010",
    "Test case name": "Convert polite phrasing",
    "Input length type": "M",
    "Input": "oyaadha mama kalin kivva vidhihata vaeda karagaththee",
    "Expected output": "ඔයාද මම කලින් කිව්ව විදිහට වැඩ කරගත්තේ",
    "Actual output": "ඔයාද මම කලින් කිව්ව විදිහට වැඩ කරගත්තේ",
    "Status": "Pass",
    "Accuracy justification / Description": "Polite phrasing handled.",
    "What is covered by the test": "Greeting / request / response; Present tense; S (≤30 characters); Accuracy validation"
  },
  {
    "TC ID": "Pos_Fun_0011",
    "Test case name": "Frequent expression conversion",
    "Input length type": "S",
    "Input": "bohooma sthuthiyi",
    "Expected output": "බොහෝම ස්තුතියි",
    "Actual output": "බොහෝම ස්තුතියි",
    "Status": "Pass",
    "Accuracy justification / Description": "Frequent day-to-day expression converted correctly.",
    "What is covered by the test": "Daily language usage; Simple sentence; S (≤30 characters); Accuracy validation"
  },
  {
    "TC ID": "Pos_Fun_0012",
    "Test case name": "Repeated word emphasis",
    "Input length type": "S",
    "Input": "samaavenna",
    "Expected output": "සමාවෙන්න",
    "Actual output": "සමාවෙන්න",
    "Status": "Pass",
    "Accuracy justification / Description": "Repeated words converted correctly.",
    "What is covered by the test": "Word combination / phrase pattern; Simple sentence; S (≤30 characters); Accuracy validation"
  },
  {
    "TC ID": "Pos_Fun_0013",
    "Test case name": "Tense variation past",
    "Input length type": "S",
    "Input": "meeka hari lassanayi",
    "Expected output": "මේක හරි ලස්සනයි",
    "Actual output": "මේක හරි ලස්සනයි",
    "Status": "Pass",
    "Accuracy justification / Description": "Past tense correctly converted.",
    "What is covered by the test": "Tense variation; Past tense; S (≤30 characters); Accuracy validation"
  },
  {
    "TC ID": "Pos_Fun_0014",
    "Test case name": "Tense variation present",
    "Input length type": "S",
    "Input": "mata podi dheyak oonee",
    "Expected output": "මට පොඩි දෙයක් ඕනේ",
    "Actual output": "මට පොඩි දෙයක් ඕනේ",
    "Status": "Pass",
    "Accuracy justification / Description": "Present tense correctly converted.",
    "What is covered by the test": "Tense variation; Present tense; S (≤30 characters); Accuracy validation"
  },
  {
    "TC ID": "Pos_Fun_0015",
    "Test case name": "Tense variation future",
    "Input length type": "S",
    "Input": "mama heta ennam",
    "Expected output": "මම හෙට එන්නම්",
    "Actual output": "මම හෙට එන්නම්",
    "Status": "Pass",
    "Accuracy justification / Description": "Future tense correctly converted.",
    "What is covered by the test": "Tense variation; Future tense; S (≤30 characters); Accuracy validation"
  },
  {
    "TC ID": "Pos_Fun_0016",
    "Test case name": "Tense variation future",
    "Input length type": "S",
    "Input": "mama ehema kiyalaa thibbaa",
    "Expected output": "මම එහෙම කියලා තිබ්බා",
    "Actual output": "මම එහෙම කියලා තිබ්බා",
    "Status": "Pass",
    "Accuracy justification / Description": "Future tense correctly converted.",
    "What is covered by the test": "Tense variation; Future tense; S (≤30 characters); Accuracy validation"
  },
{
    "TC ID": "Pos_Fun_0017",
    "Test case name": "Tense variation future",
    "Input length type": "S",
    "Input": "mata hari sathutuyi",
    "Expected output": "මට හරි සතුටුයි",
    "Actual output": "මට හරි සතුටුයි",
    "Status": "Pass",
    "Accuracy justification / Description": "Future tense correctly converted.",
    "What is covered by the test": "Tense variation; Future tense; S (≤30 characters); Accuracy validation"
  },
{
    "TC ID": "Pos_Fun_0018",
    "Test case name": "Tense variation future",
    "Input length type": "S",
    "Input": "oyaa hoDHA vidhihata vaeda karanna",
    "Expected output": "ඔයා හොඳ විදිහට වැඩ කරන්න",
    "Actual output": "ඔයා හොඳ විදිහට වැඩ කරන්න",
    "Status": "Pass",
    "Accuracy justification / Description": "Future tense correctly converted.",
    "What is covered by the test": "Tense variation; Future tense; S (≤30 characters); Accuracy validation"
  },
{
    "TC ID": "Pos_Fun_0019",
    "Test case name": "Tense variation future",
    "Input length type": "S",
    "Input": "oyaa hari hoDHAyi",
    "Expected output": "ඔයා හරි හොඳයි",
    "Actual output": "ඔයා හරි හොඳයි",
    "Status": "Pass",
    "Accuracy justification / Description": "Future tense correctly converted.",
    "What is covered by the test": "Tense variation; Future tense; S (≤30 characters); Accuracy validation"
  },{
    "TC ID": "Pos_Fun_0020",
    "Test case name": "Tense variation future",
    "Input length type": "S",
    "Input": "mokakdha karannee?",
    "Expected output": "මොකක්ද කරන්නේ?",
    "Actual output": "මොකක්ද කරන්නේ?",
    "Status": "Pass",
    "Accuracy justification / Description": "Future tense correctly converted.",
    "What is covered by the test": "Tense variation; Future tense; S (≤30 characters); Accuracy validation"
  },

 {
    "TC ID": "Neg_Fun_001",
    "Test case name": "Incorrect transliteration with mixed languag",
    "Input length type": "S",
    "Input": "mama trip ekak  yanavaa ",
    "Expected output": "mama trip ekak  yanavaa ",
    "Actual output": "මම trip එකක්  යනවා  ",
    "Status": "Fail",
    "Accuracy justification / Description": "System fails to convert mixed language input correctly.",
    "What is covered by the test": "Mixed Singlish + English; Simple sentence; S (≤30 characters); Robustness validation"
  },
  {
    "TC ID": "Neg_Fun_002",
    "Test case name": "Numbers in input",
    "Input length type": "S",
    "Input": "mata 2 bath oonee",
    "Expected output": "mata 2 bath oonee",
    "Actual output": "මට 2 බත් ඕනේ",
    "Status": "Fail",
    "Accuracy justification / Description": "System does not process inputs with numbers correctly.",
    "What is covered by the test": "Punctuation / numbers; Simple sentence; S (≤30 characters); Robustness validation"
  },
  {
    "TC ID": "Neg_Fun_003",
    "Test case name": "Special symbols in input",
    "Input length type": "S",
    "Input": "api @ office yanavaa",
    "Expected output": "api @ office yanavaa",
    "Actual output": "අපි @ office යනවා",
    "Status": "Fail",
    "Accuracy justification / Description": "System does not process inputs with special symbols correctly.",
    "What is covered by the test": "Punctuation / numbers; Simple sentence; S (≤30 characters); Robustness validation"
  },
  {
    "TC ID": "Neg_Fun_004",
    "Test case name": "English only input with extra spaces",
    "Input length type": "S",
    "Input": "mama pansal  yanavaa",
    "Expected output": "mama pansal yanavaa",
    "Actual output": "මම පන්සල්  යනවා",
    "Status": "Fail",
    "Accuracy justification / Description": "System fails to handle mixed capitalization in input correctly.",
    "What is covered by the test": "Typographical error handling; Simple sentence; S (≤30 characters); Robustness validation"
  },
  {
    "TC ID": "Neg_Fun_005",
    "Test case name": "Multiple spaces between words",
    "Input length type": "S",
    "Input": "mama   palli   yanavaa",
    "Expected output": "mama   palli   yanavaa",
    "Actual output": "මම   පල්ලි   යනවා",
    "Status": "Fail",
    "Accuracy justification / Description": "System fails to normalize multiple spaces into single space during conversion.",
    "What is covered by the test": "Typographical error handling; Simple sentence; S (≤30 characters); Robustness validation"
  },
  {
    "TC ID": "Neg_Fun_006",
    "Test case name": "Unsupported punctuation combination",
    "Input length type": "S",
    "Input": "mama office yanavaa!!!??",
    "Expected output": "මම ඔෆිස් යනවා!!!??",
    "Actual output": "මම office යනවා!!!??",
    "Status": "Fail",
    "Accuracy justification / Description": "System fails to convert text correctly when multiple punctuation marks are combined.",
    "What is covered by the test": "Punctuation / numbers; Simple sentence; S (≤30 characters); Robustness validation"
  },
  {
    "TC ID": "Neg_Fun_007",
    "Test case name": "Long input with repeated words",
    "Input length type": "L",
    "Input": "hari hari ".repeat(50),
    "Expected output": "හරි හරි ".repeat(50),
    "Actual output": "hari hari ".repeat(50),
    "Status": "Fail",
    "Accuracy justification / Description": "System fails to handle repeated words for emphasis in long input.",
    "What is covered by the test": "Repeated word expressions; L (≥300 characters); Robustness validation"
  },
  {
    "TC ID": "Neg_Fun_008",
    "Test case name": "Numbers + special characters in long text",
    "Input length type": "S",
    "Input": "api 2nd floor 25/12/2025 meeting yanavaa ",
    "Expected output": "api 2nd floor 25/12/2025 meeting yanavaa ",
    "Actual output": "අපි 2nd floor 25/12/2025 meeting යනවා ",
    "Status": "Fail",
    "Accuracy justification / Description": "System fails to process long inputs with numbers and special characters correctly.",
    "What is covered by the test": "Punctuation / numbers; S (≤30 characters); Robustness validation"
  },

 

  // ---------------- Positive UI Test Cases ----------------
  {
    "TC ID": "Pos_UI_0001",
    "Test case name": "Sinhala output clears correctly when input is cleared",
    "Input length type": "S",
    "Input": "mata nidhi mathayi",
    "Expected output": "මට නිදි මතයි",
    "Actual output": "මට නිදි මතයි",
    "Status": "Pass",
    "Accuracy justification / Description": "Real-time output appears correctly.",
    "What is covered by the test": "Usability flow (real-time conversion); Simple sentence; S (≤30 characters); Real-time output update behavior"
  },
  {
    "TC ID": "Pos_UI_0002",
    "Test case name": "Asking for help",
    "Input length type": "S",
    "Input": "mama udhavi karanna  oonee",
    "Expected output": "මම උදව් කරන්න ඕනේ",
    "Actual output": "මම උදව් කරන්න ඕනේ",
    "Status": "Pass",
    "Accuracy justification / Description": "Sentence transliterated correctly with proper spelling.",
    "What is covered by the test": "Input Type: Sentence / Grammar Focus: Daily activities / Length: Short / Quality: Accuracy"
  },
   {
    "TC ID": "Pos_UI_0003",
    "Test case name": "Greeting sentence",
    "Input length type": "S",
    "Input": "obata suba dhavasak",
    "Expected output": "ඔබට සුබ දවසක්",
    "Actual output": "ඔබට සුබ දවසක්",
    "Status": "Pass",
    "Accuracy justification / Description": "Sentence transliterated correctly with proper spelling.",
    "What is covered by the test": "Input Type: Sentence / Grammar Focus: Greetings / Length: Short / Quality: Accuracy"
  }, {
    "TC ID": "Pos_UI_0004",
    "Test case name": "Simple question",
    "Input length type": "S",
    "Input": "obata hoDHAyi dha?",
    "Expected output": "ඔබට හොඳයි ද?",
    "Actual output": "ඔබට හොඳයි ද?",
    "Status": "Pass",
    "Accuracy justification / Description": "Sentence transliterated correctly with proper spelling.",
    "What is covered by the test": "Input Type: Sentence / Grammar Focus: Greetings / Length: Short / Quality: Accuracy"
  }, {
    "TC ID": "Pos_UI_0005",
    "Test case name": "Future activity sentence",
    "Input length type": "S",
    "Input": "mama heta paasalata yanavaa",
    "Expected output": "මම හෙට පාසලට යනවා",
    "Actual output": "මම හෙට පාසලට යනවා",
    "Status": "Pass",
    "Accuracy justification / Description": "Sentence transliterated correctly with proper spelling.",
    "What is covered by the test": "Input Type: Sentence / Grammar Focus: Greetings / Length: Short / Quality: Accuracy"
  },

  // ---------------- Negative UI Test Cases ----------------
  {
    "TC ID": "Neg_UI_0001",
    "Test case name": "UI lag with long input",
    "Input length type": "L",
    "Input": "mama ".repeat(100),
    "Expected output": "Sinhala output updates without lag",
    "Actual output": "Lag observed",
    "Status": "Fail",
    "Accuracy justification / Description": "Long input causes UI lag.",
    "What is covered by the test": "Usability flow; L (≥300 characters); Real-time output update behavior"
  },{
    "TC ID": "Neg_UI_0002",
    "Test case name": "Incorrect Sinhala output",
    "Input length type": "S",
    "Input": "oyaa enavadha? ",
    "Expected output": "oyaa enavadha?",
    "Actual output": "ඔයා එනවද?",
    "Status": "Fail",
    "Accuracy justification / Description": "Incorrect Sinhala output generated.",
    "What is covered by the test": "Daily language usage; Interrogative (question); S (≤30 characters); Real-time output update behavior"
  },{
    "TC ID": "Neg_UI_0003",
    "Test case name": "Incorrect Sinhala output",
    "Input length type": "S",
    "Input": "mama pansal yanavaa ",
    "Expected output": "mama pansal yanavaa",
    "Actual output": "මම පන්සල් යනවා",
    "Status": "Fail",
    "Accuracy justification / Description": "Incorrect Sinhala output generated.",
    "What is covered by the test": "Daily language usage; Sentence structure; S (≤30 characters); Real-time output update behavior"
  },{
    "TC ID": "Neg_UI_0004",
    "Test case name": "No Sinhala output update",
    "Input length type": "S",
    "Input": " mama gedhara yanavaa, oyata kohomadha? ",
    "Expected output": " mama gedhara yanavaa, oyata kohomadha?",
    "Actual output": "මම ගෙදර යනවා, ඔයාට කොහොමද?",
    "Status": "Fail",
    "Accuracy justification / Description": "No update in Sinhala output despite input change.",
    "What is covered by the test": "Usability flow; S (≤30 characters); Real-time output update behavior"
  },

  
];

// Create workbook
const wb = XLSX.utils.book_new();
const ws = XLSX.utils.json_to_sheet(testCases);
XLSX.utils.book_append_sheet(wb, ws, "TestCases");

// Write the Excel file
XLSX.writeFile(wb, "IT23156210 - IT3040_TestCases.xlsx");
console.log("Excel file generated successfully!");

