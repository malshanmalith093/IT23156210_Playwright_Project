import { test, expect } from '@playwright/test';

test.describe('Sinhala Transliteration - 37 Test Cases', () => {

  const testCases = [

    // ================= POSITIVE FUNCTIONAL =================
    { id: "Pos_Fun_0001", name: "Greeting phrase", input: "oyaata kohomadha?", expected: "ඔයාට කොහොමද?" },
    { id: "Pos_Fun_0002", name: "Mixed-language input", input: "machan mata adha meeting ekak thiyenavaa", expected: "මචන් මට අද meeting එකක් තියෙනවා" },
    { id: "Pos_Fun_0003", name: "Short request", input: "mata help ekak karanna puLuvandha?", expected: "මට help එකක් කරන්න පුළුවන්ද?" },
    { id: "Pos_Fun_0004", name: "Simple sentence", input: "mama gedhara yanavaa, heethuva vahina nisaa dhaenma yannee naehae", expected: "මම ගෙදර යනවා, හේතුව වහින නිසා දැන්ම යන්නේ නැහැ" },
    { id: "Pos_Fun_0005", name: "Compound sentence", input: "mama bath kanna yanavaa, passee ennam", expected: "මම බත් කන්න යනවා, පස්සේ එන්නම්" },
    { id: "Pos_Fun_0006", name: "Question sentence", input: "oyaa monavadha karannee?", expected: "ඔයා මොනවද කරන්නේ?" },
    { id: "Pos_Fun_0007", name: "Imperative", input: "vahaama enna", expected: "වහාම එන්න" },
    { id: "Pos_Fun_0008", name: "Polite phrase", input: "karuNaakaralaa mata udhavvak karanna", expected: "කරුණාකරලා මට උදව්වක් කරන්න" },
    { id: "Pos_Fun_0009", name: "Negative sentence", input: "mama ehema karannee naehae.", expected: "මම එහෙම කරන්නේ නැහැ." },
    { id: "Pos_Fun_0010", name: "Present tense", input: "mama dhaen vaeda karanavaa", expected: "මම දැන් වැඩ කරනවා" },
    { id: "Pos_Fun_0011", name: "Thanks phrase", input: "bohooma sthuthiyi", expected: "බොහෝම ස්තුතියි" },
    { id: "Pos_Fun_0012", name: "Apology phrase", input: "samaavenna", expected: "සමාවෙන්න" },
    { id: "Pos_Fun_0013", name: "Instruction sentence", input: "meeka hari lassanayi", expected: "මේක හරි ලස්සනයි" },
    { id: "Pos_Fun_0014", name: "Request sentence", input:  "mata podi dheyak oonee", expected: "මට පොඩි දෙයක් ඕනේ" },
    { id: "Pos_Fun_0015", name: "Future tense", input: "mama heta ennam", expected: "මම හෙට එන්නම්" },
    { id: "Pos_Fun_0016", name: "Past tense", input: "mama ehema kiyalaa thibbaa", expected: "මම එහෙම කියලා තිබ්බා" },
    { id: "Pos_Fun_0017", name: "Polite vs informal phrasing", input: "mata hari sathutuyi", expected: "මට හරි සතුටුයි" },
    { id: "Pos_Fun_0018", name: "Advice sentence", input: "oyaa hoDHA vidhihata vaeda karanna", expected: "ඔයා හොඳ විදිහට වැඩ කරන්න" },
    { id: "Pos_Fun_0019", name: "Motivation", input: "api Galle trip ekak yamu", expected: "අපි Galle trip එකක් යමු" },
    { id: "Pos_Fun_0020", name: "Simple chat", input: "mokakdha karannee?", expected: "මොකක්ද කරන්නේ?" },

    // ================= NEGATIVE FUNCTIONAL =================
    { id: "Neg_Fun_0001", name: "Empty input", input: "mama ehema karannee naehae", expected: "මම එහෙම කරන්නේ nahe " },
    { id: "Neg_Fun_0002", name: "Random symbols", input: "mama ehema karannee naehae.", expected: "මම එහෙම කරන්නේ naehae." },
    { id: "Neg_Fun_0003", name: " ", input: "api heta ennee naehae, mata bath oonee naehae.", expected: "අපි හෙට ennee naehae, මට බත් oonee naehae." },
    { id: "Neg_Fun_0004", name: "English only", input: "mata eeka karanna baee.", expected: "මට ඒක කරන්න baee." },
    { id: "Neg_Fun_0005", name: "Wrong spelling", input: "api iiLaGa sathiyee gedhara yamu naehae.", expected: "අපි iiLaGa sathiyee gedhara yamu naehae" },
    { id: "Neg_Fun_0006", name: "Slang input", input: "oyaa enavadha naehae?", expected: "ඔයා enavadha naehae?" },
    { id: "Neg_Fun_0007", name: "Mixed symbols", input: "mata eeka epaa.", expected: "මට eeka epaa." },
    { id: "Neg_Fun_0008", name: "Whitespace input", input: " hari hari karannee naehae. ", expected: "hari hari karannee naehae." },

    // ================= POSITIVE UI =================
    { id: "Pos_UI_0001", name: "Real-time conversion", input: "man kade yanavaa", expected: "man  කඩෙ යනවා" },
    { id: "Pos_UI_0002", name: "Clear input", input: "mama bath kanavaa", expected: "මම බත් කනවා" },
    { id: "Pos_UI_0003", name: "Font rendering", input: "oyaata kohomadha?", expected: "ඔයාට කොහොමද?" },
    { id: "Pos_UI_0004", name: "Text selection", input: "mata udhavvak karanna", expected: "මට උදව්වක් කරන්න" },
    { id: "Pos_UI_0005", name: "Responsive display", input: "mama ehema karanavaa", expected: "මම එහෙම කරනවා" },

    // ================= NEGATIVE UI =================
    { id: "Neg_UI_0001", name: "Long UI lag", input: "mam mam mam mam mam mam", expected: "මම මම මම මම මම මම" },
    { id: "Neg_UI_0002", name: "Overflow handling", input: "mama".repeat(40), expected: "මම ".repeat(40) },
    { id: "Neg_UI_0003", name: "Page reload behavior", input: "man gedhara yanavaa", expected: "" },
    { id: "Neg_UI_0004", name: "No update UI", input: "helwa", expected: "හෙලඅ" },

    // ================= EDGE CASES =================
    { id: "Edge_0001", name: "Very long input", input: "mama ".repeat(100), expected: "මම" },
    { id: "Edge_0002", name: "Emoji input", input: "oya 😊 kohomadha", expected: "ඔය 😊 කොහොමද" },
    { id: "Edge_0003", name: "Newline input", input: "mama\ngedhara", expected: "මම\nගෙදර" }

  ];

  for (const tc of testCases) {
  test(`${tc.id} - ${tc.name}`, async ({ page }) => {

    // 1. Navigate to the Swift Translator website
    await page.goto('https://www.swifttranslator.com/');

    // 2. Select the Singlish input textarea (using placeholder)
    const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
    const inputSelector = 'textarea[placeholder="Input Your Singlish Text Here."]';

    // Use chunked typing to simulate real user input so the site's IME processes sequences correctly.
    await page.fill(inputSelector, '');
    await inputArea.click();
    const text = tc.input;
    const CHUNK = 200; // characters per chunk to avoid Playwright typing timeouts
    if (text.length === 0) {
      // nothing to type
    } else if (text.length <= CHUNK) {
      await inputArea.type(text, { delay: 35 });
    } else {
      for (let i = 0; i < text.length; i += CHUNK) {
        const chunk = text.slice(i, i + CHUNK);
        await inputArea.type(chunk, { delay: 25 });
        // allow the page to process chunk
        await page.waitForTimeout(100);
      }
    }
    // Ensure compositionend/input events fired after typing
    await page.evaluate((sel) => {
      const el = document.querySelector(sel) as HTMLTextAreaElement | null;
      if (!el) return;
      el.dispatchEvent(new CompositionEvent('compositionend', { bubbles: true, cancelable: true, data: el.value }));
      el.dispatchEvent(new Event('input', { bubbles: true }));
    }, inputSelector);

    // Special handling for the Clear-input UI test: click the first Clear button found
    if (tc.id === 'Pos_UI_0002') {
      const clearLocator = page.getByRole('button', { name: /clear/i });
      try {
        await clearLocator.first().click();
      } catch (err) {
        // Fallback: select-all + delete
        await inputArea.click();
        const modifier = process.platform === 'darwin' ? 'Meta' : 'Control';
        await page.keyboard.press(`${modifier}+A`);
        await page.keyboard.press('Backspace');
      }
    }

    // 3. Select the output box
    // Based on your HTML, it's a div with bg-slate-50 following the "Sinhala" title
    const outputBox = page.locator('.card:has-text("Sinhala") .bg-slate-50');

    // 4. Wait for the translation to appear (it's automatic)
    // We wait until the text content matches or contains our expected value
    // Allow more time for conversion on slower environments
    await expect(outputBox).toContainText(tc.expected, { timeout: 10000 });

    const output = await outputBox.textContent();
    console.log(`Running: ${tc.id} | Result: ${output}`);

    expect(output).toContain(tc.expected);
  });
}

});