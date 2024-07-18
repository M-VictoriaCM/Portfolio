<template>
    <div class="contact__container">
        <div class="content_grid">
            <form @submit.prevent="handleSubmit">
                <div class="contact__inputs grid">

                    <div class="contact__content col-auto">
                        <label for="name" class="contact__label">Nombre y Apellido:</label>
                        <input type="text" v-model="name" id="name" class="contact__input"
                            :class="{ 'is-invalid': nameErrors.length }">
                        <ul v-if="nameErrors.length">
                            <li v-for="error in nameErrors" :key="error">{{ error }}</li>
                        </ul>
                    </div>
                    <div class="contact__content col-auto">
                        <label for="subject" class="contact__label">Asunto:</label>
                        <input type="text" v-model="subject" id="subject" class="contact__input"
                            :class="{ 'is-invalid': subjectErrors.length }">
                        <ul v-if="subjectErrors.length">
                            <li v-for="error in subjectErrors" :key="error">{{ error }}</li>
                        </ul>
                    </div>
                    <div class="contact__content col-auto">
                        <label for="email" class="contact__label">Email:</label>
                        <input type="email" v-model="email" id="email" class="contact__input"
                            :class="{ 'is-invalid': emailErrors.length }">
                        <ul v-if="emailErrors.length">
                            <li v-for="error in emailErrors" :key="error">{{ error }}</li>
                        </ul>
                    </div>
                    <div class="contact__content">
                        <label for="coments" class="contact__label">Mensaje:</label>
                        <textarea v-model="message" id="coments" cols="0" rows="5" class="contact__input"
                            :class="{ 'is-invalid': messageErrors.length }"></textarea>
                        <ul v-if="messageErrors.length">
                            <li v-for="error in messageErrors" :key="error">{{ error }}</li>
                        </ul>
                    </div>
                    <div class="contact__send">
                        <button type="submit" class="btn btn-primary" :disabled="hasErrors">
                            <span class="contact__text">Enviar</span>
                            <i class="fa-solid fa-paper-plane btn__icon"></i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { db } from '../utils/firebase.js';
export default {
    name: 'Contacto',
    data() {
        return {
            name: '',
            subject: '',
            email: '',
            message: '',
            nameErrors: [],
            subjectErrors: [],
            emailErrors: [],
            messageErrors: [],
        };
    },
    methods: {
        validateForm() {
            this.nameErrors = [];
            this.subjectErrors = [];
            this.emailErrors = [];
            this.messageErrors = [];

            if (this.name.trim() === '') {
                this.nameErrors.push('El nombre es obligatorio');
            }
            if (this.subject.trim() === '') {
                this.subjectErrors.push('El asunto es obligatorio');
            }
            if (!this.validateEmail(this.email)) {
                this.emailErrors.push('Introduzca un email válido');
            }
            if (this.message.trim() === '') {
                this.messageErrors.push('El mensaje es obligatorio');
            }

            return this.nameErrors.length === 0 && this.subjectErrors.length === 0 && this.emailErrors.length === 0 && this.messageErrors.length === 0;
        },
        validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        },

         async handleSubmit() {
            if (this.validateForm()) {
                const formData = {
                    name: this.name,
                    subject: this.subject,
                    email: this.email,
                    message: this.message,
                }

                try {
                    await db.ref('menssages').add(formData);  // Aquí podría estar el error
                    alert('Formulario enviado:');
                    // Reset de formulario
                    this.name = '';
                    this.subject = '';
                    this.email = '';
                    this.message = '';
                    this.nameErrors = [];
                    this.subjectErrors = [];
                    this.emailErrors = [];
                    this.messageErrors = [];
                } catch (error) {
                    alert('Error al enviar el formulario', error);
                }
            }
        }
    }
}
</script>

<style>
@import "../assets/css/contact.css";
</style>