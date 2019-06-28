/**
 * link teste: https://regex101.com/r/vbPa6p/2
 *
 * - Teste Hotmilhas -
 *
 * Escreva uma expressão regular para localizar o melhor preço com ou sem escalas,
 * depois utilize sua expressão para extrair a string correspondente ao valor escolhido
 * e em seguida converta o resultado em valor decimal (float) de forma que tenhamos apenas
 * "1367.00" ou "994.00" . Dica: Se necessário, utilize o site https://regex101.com/ para
 * testar a sua expressão.
 */

const regex = /([Mm]elhor) (.*?) (.*?) (escalas) (R\$\ )(.*)[(].?[)]/;
const str = `Melhor preço sem escalas R$ 1.367(1)
Melhor preço com escalas R$ 994 (1)`;
let m;

if ((m = regex.exec(str)) !== null) {    
    num = m[6];
    num = parseFloat(num.replace(".", ""))
    console.log((num).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&'));    
}
