Object.assign(window.search, {"doc_urls":["index.html#Главная-страница","judje.html#Тестирующая-система","judje.html#вердикты-тестирования","how-to-read.html#Как-читать","how-to-read.html#Структура-условия","how-to-read.html#Из-условия-в-модель","how-to-solve.html#Как-придумывать","how-to-testing.html#Как-тестировать","how-to-testing.html#Автоматическое-нахождение-контрпримера","how-to-testing.html#Написание-скрипта","examples.html#Примеры-решения-задач","examples.html#Анализ-условия","examples.html#Алгоритм","examples.html#Типы-данных","examples.html#Ввод-и-вывод-данных","examples.html#Сортировка-и-циклы","examples.html#Последние-штрихи"],"index":{"documentStore":{"docInfo":{"0":{"body":4,"breadcrumbs":1,"title":0},"1":{"body":2,"breadcrumbs":1,"title":0},"10":{"body":0,"breadcrumbs":1,"title":0},"11":{"body":6,"breadcrumbs":1,"title":0},"12":{"body":74,"breadcrumbs":1,"title":0},"13":{"body":5,"breadcrumbs":1,"title":0},"14":{"body":9,"breadcrumbs":1,"title":0},"15":{"body":1,"breadcrumbs":1,"title":0},"16":{"body":8,"breadcrumbs":1,"title":0},"2":{"body":22,"breadcrumbs":1,"title":0},"3":{"body":0,"breadcrumbs":1,"title":0},"4":{"body":5,"breadcrumbs":1,"title":0},"5":{"body":0,"breadcrumbs":1,"title":0},"6":{"body":1,"breadcrumbs":1,"title":0},"7":{"body":0,"breadcrumbs":1,"title":0},"8":{"body":2,"breadcrumbs":1,"title":0},"9":{"body":2,"breadcrumbs":1,"title":0}},"docs":{"0":{"body":"Ссылка на тг канал Нас уже 125!! Напишите свои вопросы по текущей лабораторной работе №X. Например, какие проблемы у вас возникают при решении определённых задач? для лабы : лаба1 ... Пишите tg@i9kin по поводу замечаний и предложений.","breadcrumbs":"FAQ » Главная страница","id":"0","title":"Главная страница"},"1":{"body":"Перед решением задачи, стоит разобраться с тестирующей системой) Раз и навсегда разберёмся с ответом на вопрос \"почему у меня задача не заходит!?\". На курсе \"алгоритмы и структуры данных\" будет использоваться sort-me — система для автоматического тестирования решений. Когда вы отправляете код на тестирование в систему, ваше решение запускается в специальном безопасном окружение (sandbox) и последовательно тестируется на заранее приготовленных тестах жюри. В результате вы получаете вердикты, смысл которых понятен из названия.","breadcrumbs":"FAQ » Тестирующая система » Тестирующая система","id":"1","title":"Тестирующая система"},"10":{"body":"Решим задачу. Прочтите условие задачи по ссылке .","breadcrumbs":"FAQ » Примеры решения задач » Примеры решения задач","id":"10","title":"Примеры решения задач"},"11":{"body":"Переформулируем условие : Дан массив. Вы несколько раз (возможно ноль) выбираете два разных индекса \\( i \\) и \\( j\\) таких, что \\( |a_i - a_j| \\le 1 \\), и удаляете наименьший элемент из этих двух (если они равны то удаляете любой). Определите возможно ли получить массив, состоящий только из одного элемента. (YES/NO)","breadcrumbs":"FAQ » Примеры решения задач » Анализ условия","id":"11","title":"Анализ условия"},"12":{"body":"\"На какую тему задача?\". Данная задача взята не из конкретной лабы, но вчитаемся чуть внимательнее в условие. Учитывая, что мы удаляем из двух выбранных элементов минимальный, то логичным будет утверждение о том, что если ответ YES, то наш оставшийся элемент - максимальный. Так мы пришли к тому, что задача, вероятнее всего, будет связана с сортировкой. Время определить, как именно нам поможет сортировка, и какой алгоритм мы должны выстроить вокруг неё. Для этого достаточно рассмотреть последнее удаление — мы выбрали \\(x\\) и \\(y\\), где \\(y \\le x\\). Следовательно максимальный элемент массива \\(a\\) невозможно удалить, а так-же \\(y=x\\) или \\(y=x-1\\). Из всего вышеперечисленного можно сделать вывод, что при оптимальном процессе удаления, числа, которые удаляются, не уменьшаются. Значит решение заключается в том, чтобы отсортировать массив и сравнить на разность соседние элементы. Реализуем поэтапно наше решение, в ходе чего будем анализировать каждый шаг и возможность его оптимизации. Протестируем наше решение готовыми тестами из условия, а также напишем несколько своих тестов, задумавшись о ситуациях, где входные данные могут иметь нерядовой случай, который мы могли не учесть, и который сломает наше решение. Пункт (4) остаётся на размышление читателям. Решение формально выглядит так : считать массив отсортировать его сравнить соседние элементы. И если где-то разница элементов больше единицы, то ответ NO, иначе YES. Введите код из листинга ниже в файл main.cpp. #include <iostream> using namespace std; int a[50]; void solve() { int n; cin >> n; for (int i = 0; i < n; i++) { cin >> a[i]; } sort(a, a + n); for (int i = 0; i + 1 < n; i++) { if (a[i + 1] - a[i] > 1) { cout << \"NO\\n\"; return ; } } cout << \"YES\\n\";\n} int main() { int t; cin >> t; while (t--) { solve(); } return 0;\n} Этот код содержит много информации, поэтому рассмотрим его построчно. Для ввода данных и последующей печати ответов нам необходимо подключить библиотеку iostream. Для этого напишем #include <iostream>, а using namespace std; помогает использовать пространство имён. (не берите в голову) Функция main запускается каждый раз при запуске программы. Ещё main называют точкой входа в программу. Функция ничего не принимает, поэтому мы написали (). Тело любой функции заключается в {}. Перед main написано int — тип результата функции, возвращаем мы 0 (return 0). Именно 0, так-как это код возврата программы и чтобы не получить RE он должен быть 0. Как видно solve тоже функция, но тип перед ней void — пустой тип, поэтому мы и делаем return ;.","breadcrumbs":"FAQ » Примеры решения задач » Алгоритм","id":"12","title":"Алгоритм"},"13":{"body":"В c++, как и во всех языках программирования много типов данных. int/float/string и тп. В задаче нам нужны типы для длины массива и количество тестов t. Для таких переменных подходят числа, а их тип int, от слова Integer. Массив чисел создаётся в формате тип НазваниеПеременной[КоличествоЭлементов]","breadcrumbs":"FAQ » Примеры решения задач » Типы данных","id":"13","title":"Типы данных"},"14":{"body":"Данные можно вводить и выводить различными способами, но самое простое это использовать стандартные потоки. Так как ввод посимвольная операция, то cin >> t; попробует считывать символы, пока они числа и превратит результат в число типа int. (>> оператор, который лишь перегружен для ввода из потока) Например, cout << \"YES\\n\"; — выведет три символа Y E S, а затем выведет \\n — символ новой строки.","breadcrumbs":"FAQ » Примеры решения задач » Ввод и вывод данных","id":"14","title":"Ввод и вывод данных"},"15":{"body":"Сортировка это лишь стандартная функция. Для сортировки по не убыванию достаточно передать в качестве аргументов два указателя на память, на начало и конец. Если проще, то просто a и a+n. for и while — циклы.","breadcrumbs":"FAQ » Примеры решения задач » Сортировка и циклы","id":"15","title":"Сортировка и циклы"},"16":{"body":"Я написал отдельную функцию solve и запустил её t раз (только красиво). Условие в цикле для сравнения соседних элементов я написал i + 1 < n, чтобы не было RE, при чтение ненужной памяти. Собственно если разница больше единицы, то я моментально прекращаю работу функции используя return ;. Следовательно если ответ на задачу должен быть YES, то после выполнения цикла выведется корректный ответ. Очень многое опущено — поэтому углубитесь в язык программирования c++ и задавайте вопросы)))","breadcrumbs":"FAQ » Примеры решения задач » Последние штрихи","id":"16","title":"Последние штрихи"},"2":{"body":"Полное решение (AC). Решение успешно прошло все тесты! Неправильный ответ (WA). Решение на тесте X дало неверный ответ. Неверный формат ответа (PE). Решение на тесте X вывело ответ в некорректном формате. Ошибка при выполнении (RE). Решение на тесте X упало. Превышено время работы (TL). Решение на тесте X работает больше по времени чем по условию. Превышен лимит по памяти (ML). Решение на тесте X заняло больше памяти чем по условию. Вердикт RE может происходить из-за многих проблем связанных с вашим кодом — неверная запись в память, деление на 0. Собственно всё что возвращает код программы отличный от 0. Если решение выходит за установленный лимит по памяти (ML) или по времени (TL) во время тестирования, то sandbox моментально убивает ваше решение (процесс решения). Вердикты WA и PE получаются только после корректной работы вашей программы, но в вашем ответе содержится ошибка. Собственно тестирующая система запускает чекер (программу которая берёт тест, ответ жюри и ваш ответ и пытается проверить). Если вы выводили не по формату выходных данных то у вас возможно будет PE, так как чекер просто сломается (RE, но для чекера). Если вы вывели ответ который не верный, то вы получаете WA.","breadcrumbs":"FAQ » Тестирующая система » вердикты тестирования","id":"2","title":"вердикты тестирования"},"3":{"body":"Перед решением задачи, её стоит прочитать)","breadcrumbs":"FAQ » Как читать » Как читать","id":"3","title":"Как читать"},"4":{"body":"Условие задачи состоит из 4 важных блоков : Формулировка задачи. Тут описана чуть ли не вся задача. Входные данные. Формат по которому стоит интерпретировать входные данные. Какие ограничения существуют. Выходные данные. Формат по которому стоит вывести ответ на тест. Если его не соблюсти, то вы получите или WA или RE. Примеры тестов. Содержит таблицу с тестами. Сначала входные данные (stdin), а потом выходные (stdout). (*) Примечание. Содержит объяснение к тестам из примеров или уточнее условия.","breadcrumbs":"FAQ » Как читать » Структура условия","id":"4","title":"Структура условия"},"5":{"body":"Советую читать условие полностью, часто подсматривая на тесты и ограничения на входные данные. Вы должны отбросить ненужное и оставить самое нужное. Надо построить в голове некоторую модель, это придёт с опытом решения задач.","breadcrumbs":"FAQ » Как читать » Из условия в модель","id":"5","title":"Из условия в модель"},"6":{"body":"Чтобы придумать алгоритм, который решит задачу, не существует точной последовательности действий. НО, я бы выделил такие шаги : Задать себе вопрос — \"на какую тему лаба?\". Не стоит придумывать решение используя темы, которые по плану ещё не проходили (или не пройдёте), так как на них не могли дать задачу) (наверное?) Скорее всего задачи будут только на тему лабы, и лишь вспомогательно использовать темы предыдущие. Из 1-го пункта следует, что вы должны перебрать алгоритмы лабы в голове. На самом деле, вы лишь должны нащупать тот самый алгоритм. Проверить, а как ваша модель решается алгоритмом. Иногда, требуется добавить некоторую обработку, чтобы свести вашу модель в другую, которую проще решать. Подумать, как ваш алгоритм будет вести на разных тестах.","breadcrumbs":"FAQ » Как придумывать » Как придумывать","id":"6","title":"Как придумывать"},"7":{"body":"Как понять, что алгоритм, который ты придумал — не работает для всех случаев? Нужно построить контрпример. Можно это делать ручками перебирая различные тесты, а можно автоматически.","breadcrumbs":"FAQ » Как тестировать » Как тестировать","id":"7","title":"Как тестировать"},"8":{"body":"Cтресс-тестирование — это метод, с помощью которого мы можем запустить наше решение (которое, не правильное) на случайных тестах и сопоставить его результат с вывод решения, которое является решением грубой силы (скорее всего медленное, но точно правильное). Правильность медленного решения можно проверить, отослав код и получив TL. Что надо : Решение, которое мы хотим протестировать. Решение методом грубой силы, которое даёт правильные ответы. Генератор для генерации тестовых примеров, которые соответствуют задачи. Принцип работы: Генерировать случайный тест. Лучше его записать в файл. Запустить решение, которое даёт правильный ответ. Запустить решение, которое неправильное. Сравнить результаты вывода двух решений. Скорее всего просто на равенство строк, но иногда чекер может быть сложнее. Можно всё сделать в одном файле, но это менее удобнее.","breadcrumbs":"FAQ » Как тестировать » Автоматическое нахождение контрпримера","id":"8","title":"Автоматическое нахождение контрпримера"},"9":{"body":"Напишите генератор теста и проверку ответов двух решений в одном файле. Лучше использовать python/bash. Получается очень кратко и быстро писать. Используйте seed для генератора. Чтобы при перезапуске стресс-теста проверять предыдущие тесты. Вот простой пример","breadcrumbs":"FAQ » Как тестировать » Написание скрипта","id":"9","title":"Написание скрипта"}},"length":17,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"0":{"df":2,"docs":{"12":{"tf":2.6457513110645907},"2":{"tf":1.4142135623730951}}},"1":{"2":{"5":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":5,"docs":{"0":{"tf":1.0},"11":{"tf":1.0},"12":{"tf":2.0},"16":{"tf":1.0},"6":{"tf":1.0}}},"4":{"df":2,"docs":{"12":{"tf":1.0},"4":{"tf":1.0}}},"a":{"+":{"df":0,"docs":{},"n":{"df":1,"docs":{"15":{"tf":1.0}}}},"[":{"5":{"0":{"df":1,"docs":{"12":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"i":{"df":1,"docs":{"12":{"tf":1.7320508075688772}}}},"_":{"df":0,"docs":{},"i":{"df":1,"docs":{"11":{"tf":1.0}}},"j":{"df":1,"docs":{"11":{"tf":1.0}}}},"c":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"c":{"df":3,"docs":{"13":{"tf":1.0},"16":{"tf":1.0},"8":{"tf":1.0}},"i":{"df":0,"docs":{},"n":{"df":2,"docs":{"12":{"tf":1.7320508075688772},"14":{"tf":1.0}}}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":2,"docs":{"12":{"tf":1.4142135623730951},"14":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"df":1,"docs":{"14":{"tf":1.0}}},"i":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"d":{"df":1,"docs":{"12":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"df":0,"docs":{},"t":{"/":{"df":0,"docs":{},"f":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"a":{"df":0,"docs":{},"t":{"/":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":1,"docs":{"13":{"tf":1.0}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"df":3,"docs":{"12":{"tf":2.6457513110645907},"13":{"tf":1.0},"14":{"tf":1.0}},"e":{"df":0,"docs":{},"g":{"df":1,"docs":{"13":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"12":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}}}}}},"j":{"df":1,"docs":{"11":{"tf":1.0}}},"l":{"df":0,"docs":{},"e":{"df":2,"docs":{"11":{"tf":1.0},"12":{"tf":1.0}}}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{".":{"c":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":1,"docs":{"12":{"tf":1.0}}}}},"df":0,"docs":{}},"df":1,"docs":{"12":{"tf":2.0}}}}},"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"a":{"c":{"df":1,"docs":{"12":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":3,"docs":{"12":{"tf":2.23606797749979},"14":{"tf":1.0},"16":{"tf":1.0}},"o":{"\\":{"df":0,"docs":{},"n":{"df":1,"docs":{"12":{"tf":1.0}}}},"df":0,"docs":{}}},"p":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"/":{"b":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":1,"docs":{"9":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"r":{"df":0,"docs":{},"e":{"df":4,"docs":{"12":{"tf":1.0},"16":{"tf":1.0},"2":{"tf":1.7320508075688772},"4":{"tf":1.0}},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":2,"docs":{"12":{"tf":2.0},"16":{"tf":1.0}}}}}}}},"s":{"a":{"df":0,"docs":{},"n":{"d":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"x":{"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":1,"docs":{"14":{"tf":1.0}},"e":{"df":0,"docs":{},"e":{"d":{"df":1,"docs":{"9":{"tf":1.0}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"v":{"df":2,"docs":{"12":{"tf":1.7320508075688772},"16":{"tf":1.0}}}},"r":{"df":0,"docs":{},"t":{"(":{"a":{"df":1,"docs":{"12":{"tf":1.0}}},"df":0,"docs":{}},"df":1,"docs":{"1":{"tf":1.0}}}}},"t":{"d":{"df":1,"docs":{"12":{"tf":1.4142135623730951}},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{}}},"t":{"df":4,"docs":{"12":{"tf":1.7320508075688772},"13":{"tf":1.0},"14":{"tf":1.0},"16":{"tf":1.0}},"g":{"@":{"df":0,"docs":{},"i":{"9":{"df":0,"docs":{},"k":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"l":{"df":2,"docs":{"2":{"tf":1.4142135623730951},"8":{"tf":1.0}}}},"u":{"df":0,"docs":{},"s":{"df":1,"docs":{"12":{"tf":1.4142135623730951}}}},"v":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"12":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"w":{"a":{"df":2,"docs":{"2":{"tf":1.7320508075688772},"4":{"tf":1.0}}},"df":0,"docs":{}},"x":{"df":3,"docs":{"0":{"tf":1.0},"12":{"tf":1.4142135623730951},"2":{"tf":2.23606797749979}}},"y":{"=":{"df":0,"docs":{},"x":{"df":1,"docs":{"12":{"tf":1.4142135623730951}}}},"df":2,"docs":{"12":{"tf":1.4142135623730951},"14":{"tf":1.0}},"e":{"df":2,"docs":{"12":{"tf":1.4142135623730951},"16":{"tf":1.0}},"s":{"/":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":1,"docs":{"11":{"tf":1.0}}}}},"\\":{"df":0,"docs":{},"n":{"df":2,"docs":{"12":{"tf":1.0},"14":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"breadcrumbs":{"root":{"0":{"df":2,"docs":{"12":{"tf":2.6457513110645907},"2":{"tf":1.4142135623730951}}},"1":{"2":{"5":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":5,"docs":{"0":{"tf":1.0},"11":{"tf":1.0},"12":{"tf":2.0},"16":{"tf":1.0},"6":{"tf":1.0}}},"4":{"df":2,"docs":{"12":{"tf":1.0},"4":{"tf":1.0}}},"a":{"+":{"df":0,"docs":{},"n":{"df":1,"docs":{"15":{"tf":1.0}}}},"[":{"5":{"0":{"df":1,"docs":{"12":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"i":{"df":1,"docs":{"12":{"tf":1.7320508075688772}}}},"_":{"df":0,"docs":{},"i":{"df":1,"docs":{"11":{"tf":1.0}}},"j":{"df":1,"docs":{"11":{"tf":1.0}}}},"c":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"c":{"df":3,"docs":{"13":{"tf":1.0},"16":{"tf":1.0},"8":{"tf":1.0}},"i":{"df":0,"docs":{},"n":{"df":2,"docs":{"12":{"tf":1.7320508075688772},"14":{"tf":1.0}}}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":2,"docs":{"12":{"tf":1.4142135623730951},"14":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"df":1,"docs":{"14":{"tf":1.0}}},"f":{"a":{"df":0,"docs":{},"q":{"df":17,"docs":{"0":{"tf":1.0},"1":{"tf":1.0},"10":{"tf":1.0},"11":{"tf":1.0},"12":{"tf":1.0},"13":{"tf":1.0},"14":{"tf":1.0},"15":{"tf":1.0},"16":{"tf":1.0},"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0},"7":{"tf":1.0},"8":{"tf":1.0},"9":{"tf":1.0}}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"d":{"df":1,"docs":{"12":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"df":0,"docs":{},"t":{"/":{"df":0,"docs":{},"f":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"a":{"df":0,"docs":{},"t":{"/":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":1,"docs":{"13":{"tf":1.0}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"df":3,"docs":{"12":{"tf":2.6457513110645907},"13":{"tf":1.0},"14":{"tf":1.0}},"e":{"df":0,"docs":{},"g":{"df":1,"docs":{"13":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"12":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}}}}}},"j":{"df":1,"docs":{"11":{"tf":1.0}}},"l":{"df":0,"docs":{},"e":{"df":2,"docs":{"11":{"tf":1.0},"12":{"tf":1.0}}}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{".":{"c":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":1,"docs":{"12":{"tf":1.0}}}}},"df":0,"docs":{}},"df":1,"docs":{"12":{"tf":2.0}}}}},"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"a":{"c":{"df":1,"docs":{"12":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":3,"docs":{"12":{"tf":2.23606797749979},"14":{"tf":1.0},"16":{"tf":1.0}},"o":{"\\":{"df":0,"docs":{},"n":{"df":1,"docs":{"12":{"tf":1.0}}}},"df":0,"docs":{}}},"p":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"/":{"b":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":1,"docs":{"9":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"r":{"df":0,"docs":{},"e":{"df":4,"docs":{"12":{"tf":1.0},"16":{"tf":1.0},"2":{"tf":1.7320508075688772},"4":{"tf":1.0}},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":2,"docs":{"12":{"tf":2.0},"16":{"tf":1.0}}}}}}}},"s":{"a":{"df":0,"docs":{},"n":{"d":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"x":{"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":1,"docs":{"14":{"tf":1.0}},"e":{"df":0,"docs":{},"e":{"d":{"df":1,"docs":{"9":{"tf":1.0}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"v":{"df":2,"docs":{"12":{"tf":1.7320508075688772},"16":{"tf":1.0}}}},"r":{"df":0,"docs":{},"t":{"(":{"a":{"df":1,"docs":{"12":{"tf":1.0}}},"df":0,"docs":{}},"df":1,"docs":{"1":{"tf":1.0}}}}},"t":{"d":{"df":1,"docs":{"12":{"tf":1.4142135623730951}},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{}}},"t":{"df":4,"docs":{"12":{"tf":1.7320508075688772},"13":{"tf":1.0},"14":{"tf":1.0},"16":{"tf":1.0}},"g":{"@":{"df":0,"docs":{},"i":{"9":{"df":0,"docs":{},"k":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"l":{"df":2,"docs":{"2":{"tf":1.4142135623730951},"8":{"tf":1.0}}}},"u":{"df":0,"docs":{},"s":{"df":1,"docs":{"12":{"tf":1.4142135623730951}}}},"v":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"12":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"w":{"a":{"df":2,"docs":{"2":{"tf":1.7320508075688772},"4":{"tf":1.0}}},"df":0,"docs":{}},"x":{"df":3,"docs":{"0":{"tf":1.0},"12":{"tf":1.4142135623730951},"2":{"tf":2.23606797749979}}},"y":{"=":{"df":0,"docs":{},"x":{"df":1,"docs":{"12":{"tf":1.4142135623730951}}}},"df":2,"docs":{"12":{"tf":1.4142135623730951},"14":{"tf":1.0}},"e":{"df":2,"docs":{"12":{"tf":1.4142135623730951},"16":{"tf":1.0}},"s":{"/":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":1,"docs":{"11":{"tf":1.0}}}}},"\\":{"df":0,"docs":{},"n":{"df":2,"docs":{"12":{"tf":1.0},"14":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"title":{"root":{"df":0,"docs":{}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});