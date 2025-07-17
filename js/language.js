// Multi-Language Support System
const languages = {
    id: {
        // Navigation
        'nav-home': 'Home',
        'nav-about': 'Tentang',
        'nav-skills': 'Keahlian',
        'nav-projects': 'Project',
        'nav-contact': 'Kontak',
        'language-toggle': 'EN',

        // Hero Section
        'hero-greeting': 'Halo, Saya',
        'hero-role': 'Flutter Mobile Developer',
        'hero-description': 'Seorang pelajar SMK Negeri 12 Malang yang passionate dalam pengembangan aplikasi mobile dengan Flutter. Saya fokus pada frontend development dan selalu berusaha menciptakan aplikasi yang user-friendly.',
        'btn-view-projects': 'Lihat Projects',
        'btn-contact': 'Hubungi Saya',

        // About Section
        'about-title': 'Tentang Saya',
        'about-subtitle': 'Kenali lebih dekat tentang passion dan dedikasi saya dalam pengembangan aplikasi mobile',
        'about-role': 'Flutter Mobile Developer',
        'about-description-1': 'Halo! Saya Erlangga Satria Cakrabirawa, seorang pelajar SMK Negeri 12 Malang jurusan PPLG yang memiliki passion besar di dunia pengembangan aplikasi mobile berbasis Flutter, terutama di sisi frontend.',
        'about-description-2': 'Saya terbiasa bekerja cepat, efisien, dan rapi—dengan kemampuan menyelesaikan satu aplikasi frontend hanya dalam waktu 2 hari: Hari pertama untuk perancangan konsep dan desain UI/UX, hari kedua untuk implementasi desain ke dalam aplikasi dan build APK siap testing.',
        'stat-apps': 'Mobile Apps',
        'stat-coding-years': 'Tahun Pengalaman Coding',
        'stat-work-years': 'Tahun Pengalaman Kerja',

        // Skills Section
        'skills-title': 'Keahlian Saya',
        'skills-subtitle': 'Teknologi dan tools yang saya kuasai',

        // Projects Section
        'projects-title': 'Project Saya',
        'projects-subtitle': 'Kumpulan aplikasi mobile yang telah saya kembangkan',
        'team-projects-title': 'Team Projects',
        'team-projects-subtitle': 'Proyek yang dikembangkan bersama tim',
        'personal-projects-title': 'Personal Projects',
        'personal-projects-subtitle': 'Proyek yang dikembangkan secara mandiri',

        // Project Details
        'project-alhamrah-title': 'Alhamrah Mobile',
        'project-alhamrah-desc': 'Aplikasi mobile untuk Alhamrah dengan fitur lengkap dan interface yang user-friendly. Dikembangkan bersama tim untuk memberikan solusi digital terbaik.',
        'project-rs-title': 'RS Mobile',
        'project-rs-desc': 'Aplikasi rumah sakit mobile dengan sistem manajemen pasien dan dokter yang terintegrasi. Proyek kolaborasi untuk digitalisasi layanan kesehatan.',
        'project-klinik-title': 'Klinik Mobile',
        'project-klinik-desc': 'Aplikasi klinik mobile dengan sistem antrian digital dan manajemen rekam medis. Dikembangkan bersama tim untuk meningkatkan efisiensi layanan.',
        'project-lintaskita-title': 'LintasKita',
        'project-lintaskita-desc': 'Platform sosial media untuk berbagi informasi dan berinteraksi dengan komunitas. Proyek personal yang menggabungkan passion saya dalam social networking dan mobile development.',
        'project-type-team': 'Team Project',
        'project-type-personal': 'Personal Project',
        'btn-github': 'GitHub',

        // Contact Section
        'contact-title': 'Hubungi Saya',
        'contact-subtitle': 'Mari berdiskusi tentang project Anda',
        'contact-collaborate': 'Mari Berkolaborasi!',
        'contact-description': 'Saya terbuka untuk diskusi tentang project mobile development. Jangan ragu untuk menghubungi saya!',
        'contact-phone': 'Telepon',
        'contact-email': 'Email',
        'contact-location': 'Lokasi',

        // Contact Form
        'form-title': 'Kirim Pesan',
        'form-description': 'Silakan isi form di bawah ini untuk menghubungi saya. Saya akan merespon pesan Anda sesegera mungkin.',
        'form-name': 'Nama Lengkap *',
        'form-email': 'Email *',
        'form-phone': 'Nomor HP (Opsional)',
        'form-message': 'Pesan *',
        'form-submit': 'Kirim Pesan',
        'form-name-placeholder': 'Masukkan nama lengkap Anda',
        'form-email-placeholder': 'contoh@email.com',
        'form-phone-placeholder': '08xxxxxxxxxx atau +62xxxxxxxxxx',
        'form-message-placeholder': 'Tulis pesan Anda di sini... (minimal 10 karakter)',
        'form-phone-help': 'Nomor HP membantu saya menghubungi Anda lebih cepat',
        'form-message-help': 'Jelaskan keperluan atau project yang ingin didiskusikan',

        // Footer
        'footer-copyright': '© 2025 Erlangga Satria Cakrabirawa. Semua hak dilindungi.',

        // Form Validation Messages
        'form-validation-error': 'Mohon lengkapi semua field yang diperlukan dengan benar!',
        'form-success-message': '🎉 Pesan berhasil dikirim! Terima kasih, saya akan merespon sesegera mungkin.',
        'form-error-message': '❌ Terjadi kesalahan. Silakan coba lagi atau hubungi langsung melalui WhatsApp.',
        'form-sending': 'Mengirim Pesan...',
        'field-required': 'Field ini wajib diisi',
        'email-invalid': 'Format email tidak valid',
        'phone-invalid': 'Format nomor HP tidak valid',
        'message-too-short': 'Pesan minimal 10 karakter'
    },

    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-skills': 'Skills',
        'nav-projects': 'Projects',
        'nav-contact': 'Contact',
        'language-toggle': 'ID',

        // Hero Section
        'hero-greeting': 'Hello, I\'m',
        'hero-role': 'Flutter Mobile Developer',
        'hero-description': 'A student at SMK Negeri 12 Malang who is passionate about mobile application development with Flutter. I focus on frontend development and always strive to create user-friendly applications.',
        'btn-view-projects': 'View Projects',
        'btn-contact': 'Contact Me',

        // About Section
        'about-title': 'About Me',
        'about-subtitle': 'Get to know more about my passion and dedication in mobile application development',
        'about-role': 'Flutter Mobile Developer',
        'about-description-1': 'Hello! I\'m Erlangga Satria Cakrabirawa, a student at SMK Negeri 12 Malang majoring in PPLG who has a great passion in the world of Flutter-based mobile application development, especially on the frontend side.',
        'about-description-2': 'I\'m used to working fast, efficiently, and neatly—with the ability to complete one frontend application in just 2 days: The first day for concept design and UI/UX design, the second day for implementing the design into the application and building APK ready for testing.',
        'stat-apps': 'Mobile Apps',
        'stat-coding-years': 'Years of Coding Experience',
        'stat-work-years': 'Years of Work Experience',

        // Skills Section
        'skills-title': 'My Skills',
        'skills-subtitle': 'Technologies and tools that I master',

        // Projects Section
        'projects-title': 'My Projects',
        'projects-subtitle': 'Collection of mobile applications that I have developed',
        'team-projects-title': 'Team Projects',
        'team-projects-subtitle': 'Projects developed with a team',
        'personal-projects-title': 'Personal Projects',
        'personal-projects-subtitle': 'Projects developed independently',

        // Project Details
        'project-alhamrah-title': 'Alhamrah Mobile',
        'project-alhamrah-desc': 'Mobile application for Alhamrah with complete features and user-friendly interface. Developed with a team to provide the best digital solution.',
        'project-rs-title': 'Hospital Mobile',
        'project-rs-desc': 'Mobile hospital application with integrated patient and doctor management system. Collaboration project for digitalization of healthcare services.',
        'project-klinik-title': 'Clinic Mobile',
        'project-klinik-desc': 'Mobile clinic application with digital queue system and medical record management. Developed with a team to improve service efficiency.',
        'project-lintaskita-title': 'LintasKita',
        'project-lintaskita-desc': 'Social media platform for sharing information and interacting with the community. Personal project that combines my passion for social networking and mobile development.',
        'project-type-team': 'Team Project',
        'project-type-personal': 'Personal Project',
        'btn-github': 'GitHub',

        // Contact Section
        'contact-title': 'Contact Me',
        'contact-subtitle': 'Let\'s discuss about your project',
        'contact-collaborate': 'Let\'s Collaborate!',
        'contact-description': 'I\'m open to discussing mobile development projects. Don\'t hesitate to contact me!',
        'contact-phone': 'Phone',
        'contact-email': 'Email',
        'contact-location': 'Location',

        // Contact Form
        'form-title': 'Send Message',
        'form-description': 'Please fill out the form below to contact me. I will respond to your message as soon as possible.',
        'form-name': 'Full Name *',
        'form-email': 'Email *',
        'form-phone': 'Phone Number (Optional)',
        'form-message': 'Message *',
        'form-submit': 'Send Message',
        'form-name-placeholder': 'Enter your full name',
        'form-email-placeholder': 'example@email.com',
        'form-phone-placeholder': '08xxxxxxxxxx or +62xxxxxxxxxx',
        'form-message-placeholder': 'Write your message here... (minimum 10 characters)',
        'form-phone-help': 'Phone number helps me contact you faster',
        'form-message-help': 'Explain your needs or project you want to discuss',

        // Footer
        'footer-copyright': '© 2025 Erlangga Satria Cakrabirawa. All rights reserved.',

        // Form Validation Messages
        'form-validation-error': 'Please fill in all required fields correctly!',
        'form-success-message': '🎉 Message sent successfully! Thank you, I will respond as soon as possible.',
        'form-error-message': '❌ An error occurred. Please try again or contact directly via WhatsApp.',
        'form-sending': 'Sending Message...',
        'field-required': 'This field is required',
        'email-invalid': 'Invalid email format',
        'phone-invalid': 'Invalid phone number format',
        'message-too-short': 'Message minimum 10 characters'
    }
};

// Language Management Class
class LanguageManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('preferred-language') || 'id';
        this.init();
    }

    init() {
        this.updateLanguage(this.currentLanguage);
        this.bindEvents();
    }

    bindEvents() {
        const langToggle = document.getElementById('languageToggle');
        if (langToggle) {
            langToggle.addEventListener('click', () => {
                this.toggleLanguage();
            });
        }
    }

    toggleLanguage() {
        this.currentLanguage = this.currentLanguage === 'id' ? 'en' : 'id';
        this.updateLanguage(this.currentLanguage);
        localStorage.setItem('preferred-language', this.currentLanguage);

        // Add toggle animation
        this.animateToggle();
    }

    updateLanguage(lang) {
        const elements = document.querySelectorAll('[data-key]');
        const placeholderElements = document.querySelectorAll('[data-key-placeholder]');

        // Update text content
        elements.forEach(element => {
            const key = element.getAttribute('data-key');
            if (languages[lang] && languages[lang][key]) {
                element.textContent = languages[lang][key];
            }
        });

        // Update placeholders
        placeholderElements.forEach(element => {
            const key = element.getAttribute('data-key-placeholder');
            if (languages[lang] && languages[lang][key]) {
                element.placeholder = languages[lang][key];
            }
        });

        // Update language toggle button text
        const langText = document.querySelector('.lang-text');
        if (langText) {
            langText.textContent = languages[lang]['language-toggle'];
        }

        // Update document language attribute
        document.documentElement.lang = lang;

        // Trigger custom event for other components
        window.dispatchEvent(new CustomEvent('languageChanged', {
            detail: { language: lang }
        }));
    }

    animateToggle() {
        const langBtn = document.getElementById('languageToggle');
        const langIcon = document.querySelector('.lang-icon');

        if (langBtn && langIcon) {
            // Button pulse animation
            langBtn.style.transform = 'scale(0.95)';
            langBtn.style.transition = 'all 0.1s ease';

            setTimeout(() => {
                langBtn.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    langBtn.style.transform = 'scale(1)';
                }, 100);
            }, 100);

            // Icon rotation
            langIcon.style.transform = 'rotate(360deg)';
            langIcon.style.transition = 'transform 0.5s ease';

            setTimeout(() => {
                langIcon.style.transform = 'rotate(0deg)';
            }, 500);
        }
    }

    getCurrentLanguage() {
        return this.currentLanguage;
    }
}

// Initialize language manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.languageManager = new LanguageManager();
});

// Export for other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { LanguageManager, languages };
}
