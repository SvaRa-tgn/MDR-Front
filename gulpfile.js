// Определяем переменную "preprocessor"
let preprocessor = 'sass'; 
 
// Определяем константы Gulp
const { src, dest, parallel, series, watch } = require('gulp');
 
// Подключаем Browsersync
const browserSync = require('browser-sync').create();
 
// Подключаем gulp-concat
const concat = require('gulp-concat');
 
// Подключаем gulp-uglify-es
const uglify = require('gulp-uglify-es').default;
 
// Подключаем модули gulp-sass и gulp-less
const sass = require('gulp-sass')(require('sass'));
const less = require('gulp-less');
 
// Подключаем Autoprefixer
const autoprefixer = require('gulp-autoprefixer');
 
// Подключаем модуль gulp-clean-css
const cleancss = require('gulp-clean-css');
 
// Подключаем compress-images для работы с изображениями
const imagecomp = require('compress-images');
 
// Подключаем модуль gulp-clean (вместо del)
const clean = require('gulp-clean');
 
// Определяем логику работы Browsersync
function browsersync() {
	browserSync.init({ // Инициализация Browsersync
		server: { baseDir: 'app/' }, // Указываем папку сервера
		notify: false, // Отключаем уведомления
		online: true // Режим работы: true или false
	})
}
 
function scripts() {
	return src([ // Берем файлы из источников
		'node_modules/jquery/dist/jquery.min.js', // Пример подключения библиотеки
		'app/js/main.js', // Пользовательские скрипты, использующие библиотеку, должны быть подключены в конце
		])
	.pipe(concat('main.min.js')) // Конкатенируем в один файл
	.pipe(uglify()) // Сжимаем JavaScript
	.pipe(dest('app/js/')) // Выгружаем готовый файл в папку назначения
	.pipe(browserSync.stream()) // Триггерим Browsersync для обновления страницы
}
 
function styles() {
	return src('app/' + preprocessor + '/styles.' + preprocessor + '') // Выбираем источник: "app/sass/main.sass" или "app/less/main.less"
	.pipe(eval(preprocessor)()) // Преобразуем значение переменной "preprocessor" в функцию
	.pipe(concat('styles.min.css')) // Конкатенируем в файл app.min.js
	.pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true })) // Создадим префиксы с помощью Autoprefixer
	
	.pipe(dest('app/css/')) // Выгрузим результат в папку "app/css/"
	.pipe(browserSync.stream()) // Сделаем инъекцию в браузер
}

function stylesModul() {
	return src('app/' + preprocessor + '/modul.' + preprocessor + '') // Выбираем источник: "app/sass/modul.sass" или "app/less/modul.less"
	.pipe(eval(preprocessor)()) // Преобразуем значение переменной "preprocessor" в функцию
	.pipe(concat('modul.min.css')) // Конкатенируем в файл app.min.js
	.pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true })) // Создадим префиксы с помощью Autoprefixer
	
	.pipe(dest('app/css/')) // Выгрузим результат в папку "app/css/"
	.pipe(browserSync.stream()) // Сделаем инъекцию в браузер
}

function stylesPage() {
	return src('app/' + preprocessor + '/page.' + preprocessor + '') // Выбираем источник: "app/sass/page.sass" или "app/less/page.less"
	.pipe(eval(preprocessor)()) // Преобразуем значение переменной "preprocessor" в функцию
	.pipe(concat('page.min.css')) // Конкатенируем в файл app.min.js
	.pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true })) // Создадим префиксы с помощью Autoprefixer
	
	.pipe(dest('app/css/')) // Выгрузим результат в папку "app/css/"
	.pipe(browserSync.stream()) // Сделаем инъекцию в браузер
}

function stylesProduct() {
	return src('app/' + preprocessor + '/product.' + preprocessor + '') // Выбираем источник: "app/sass/product.sass" или "app/less/product.less"
	.pipe(eval(preprocessor)()) // Преобразуем значение переменной "preprocessor" в функцию
	.pipe(concat('product.min.css')) // Конкатенируем в файл app.min.js
	.pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true })) // Создадим префиксы с помощью Autoprefixer
	
	.pipe(dest('app/css/')) // Выгрузим результат в папку "app/css/"
	.pipe(browserSync.stream()) // Сделаем инъекцию в браузер
}

function stylesPrivate() {
	return src('app/' + preprocessor + '/private.' + preprocessor + '') // Выбираем источник: "app/sass/main.sass" или "app/less/main.less"
	.pipe(eval(preprocessor)()) // Преобразуем значение переменной "preprocessor" в функцию
	.pipe(concat('private.min.css')) // Конкатенируем в файл app.min.js
	.pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true })) // Создадим префиксы с помощью Autoprefixer
	
	.pipe(dest('app/css/')) // Выгрузим результат в папку "app/css/"
	.pipe(browserSync.stream()) // Сделаем инъекцию в браузер
}

function stylesCheckout() {
	return src('app/' + preprocessor + '/checkout.' + preprocessor + '') // Выбираем источник: "app/sass/main.sass" или "app/less/main.less"
	.pipe(eval(preprocessor)()) // Преобразуем значение переменной "preprocessor" в функцию
	.pipe(concat('checkout.min.css')) // Конкатенируем в файл app.min.js
	.pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true })) // Создадим префиксы с помощью Autoprefixer
	
	.pipe(dest('app/css/')) // Выгрузим результат в папку "app/css/"
	.pipe(browserSync.stream()) // Сделаем инъекцию в браузер
}

function stylesAdmin() {
	return src('app/' + preprocessor + '/admin.' + preprocessor + '') // Выбираем источник: "app/sass/main.sass" или "app/less/main.less"
	.pipe(eval(preprocessor)()) // Преобразуем значение переменной "preprocessor" в функцию
	.pipe(concat('admin.min.css')) // Конкатенируем в файл app.min.js
	.pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true })) // Создадим префиксы с помощью Autoprefixer
	
	.pipe(dest('app/css/')) // Выгрузим результат в папку "app/css/"
	.pipe(browserSync.stream()) // Сделаем инъекцию в браузер
}

function stylesAdaptive() {
	return src('app/' + preprocessor + '/adaptive.' + preprocessor + '') // Выбираем источник: "app/sass/main.sass" или "app/less/main.less"
	.pipe(eval(preprocessor)()) // Преобразуем значение переменной "preprocessor" в функцию
	.pipe(concat('adaptive.min.css')) // Конкатенируем в файл app.min.js
	.pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true })) // Создадим префиксы с помощью Autoprefixer
	
	.pipe(dest('app/css/')) // Выгрузим результат в папку "app/css/"
	.pipe(browserSync.stream()) // Сделаем инъекцию в браузер
}

async function images() {
	imagecomp(
		"app/images/src/**/*", // Берём все изображения из папки источника
		"app/images/dest/", // Выгружаем оптимизированные изображения в папку назначения
		{ compress_force: false, statistic: true, autoupdate: true }, false, // Настраиваем основные параметры
		{ jpg: { engine: "mozjpeg", command: ["-quality", "75"] } }, // Сжимаем и оптимизируем изображеня
		{ png: { engine: "pngquant", command: ["--quality=75-100", "-o"] } },
		{ svg: { engine: "svgo", command: "--multipass" } },
		{ gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },
		function (err, completed) { // Обновляем страницу по завершению
			if (completed === true) {
				browserSync.reload()
			}
		}
	)
}
 
function cleanimg() {
	return src('app/images/dest/', {allowEmpty: true}).pipe(clean()) // Удаляем папку "app/images/dest/"
}
 
function buildcopy() {
	return src([ // Выбираем нужные файлы
		'app/css/**/*.min.css',
		'app/js/**/*.min.js',
		'app/img/dest/**/*',
		'app/**/*.html',
		], { base: 'app' }) // Параметр "base" сохраняет структуру проекта при копировании
	.pipe(dest('dist')) // Выгружаем в папку с финальной сборкой
}
 
function cleandist() {
	return src('dist', {allowEmpty: true}).pipe(clean()) // Удаляем папку "dist/"
}
 
function startwatch() {
 
	// Выбираем все файлы JS в проекте, а затем исключим с суффиксом .min.js
	watch(['app/**/*.js', '!app/**/*.min.js'], scripts);
	
	// Мониторим файлы препроцессора на изменения
	watch('app/**/' + preprocessor + '/**/*', styles);

	// Мониторим файлы препроцессора на изменения
	watch('app/**/' + preprocessor + '/**/*', stylesModul);

	// Мониторим файлы препроцессора на изменения
	watch('app/**/' + preprocessor + '/**/*', stylesPage);

	// Мониторим файлы препроцессора на изменения
	watch('app/**/' + preprocessor + '/**/*', stylesProduct);

	// Мониторим файлы препроцессора на изменения
	watch('app/**/' + preprocessor + '/**/*', stylesPrivate);

	// Мониторим файлы препроцессора на изменения
	watch('app/**/' + preprocessor + '/**/*', stylesCheckout);

	// Мониторим файлы препроцессора на изменения
	watch('app/**/' + preprocessor + '/**/*', stylesAdmin);

	// Мониторим файлы препроцессора на изменения
	watch('app/**/' + preprocessor + '/**/*', stylesAdaptive);

	// Мониторим файлы HTML на изменения
	watch('app/**/*.html').on('change', browserSync.reload);
 
	// Мониторим папку-источник изображений и выполняем images(), если есть изменения
	watch('app/images/src/**/*', images);
 
}
 
// Экспортируем функцию browsersync() как таск browsersync. Значение после знака = это имеющаяся функция.
exports.browsersync = browsersync;
 
// Экспортируем функцию scripts() в таск scripts
exports.scripts = scripts;
 
// Экспортируем функцию styles() в таск styles
exports.styles = styles;
 
// Экспорт функции images() в таск images
exports.images = images;
 
// Экспортируем функцию cleanimg() как таск cleanimg
exports.cleanimg = cleanimg;
 
// Создаем новый таск "build", который последовательно выполняет нужные операции
exports.build = series(cleandist, styles, stylesModul, stylesPage, stylesProduct, stylesPrivate, stylesCheckout, stylesAdmin, stylesAdaptive, scripts, images, buildcopy);
 
// Экспортируем дефолтный таск с нужным набором функций
exports.default = parallel(styles, scripts, stylesModul, stylesPage, stylesProduct, stylesPrivate, stylesCheckout, stylesAdmin, stylesAdaptive, browsersync, startwatch);