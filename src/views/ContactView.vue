<script setup>
import { nextTick, reactive, ref } from 'vue'

import { contact } from '../data/site'
import { validateContact } from '../data/filters'

import PageHeading from '../components/PageHeading.vue'
import AppIcon from '../components/AppIcon.vue'

const form = reactive({ name: '', email: '', topic: '', message: '' })
const errors = ref({})
const success = ref(false)

const inquiryForm = ref(null)

// Wait for validation messages to render before focusing the first invalid field for accessibility.
async function submit() {
  errors.value = validateContact(form)
  success.value = Object.keys(errors.value).length === 0
  await nextTick()

  if (!success.value && inquiryForm.value) {
    const firstInvalidInput = inquiryForm.value.querySelector('[aria-invalid="true"]')
    if (firstInvalidInput) {
      firstInvalidInput.focus()
    }
  }
}

function edit() {
  success.value = false
}
</script>
<template>
  <PageHeading
    eyebrow="Contact us"
    title="Every great idea starts with a conversation."
    description="Have a question about a program or the college? Here’s how to reach CCS."
  />
  <section class="section container contact-layout">
    <div class="contact-information">
      <p class="eyebrow">LET’S CONNECT</p>
      <h2>We’re here to<br /><em>point the way.</em></h2>
      <div class="contact-detail">
        <AppIcon name="mail" />
        <div>
          <h3>Email the college</h3>
          <a :href="'mailto:' + contact.email">{{ contact.email }}</a>
        </div>
      </div>
      <div class="contact-detail">
        <AppIcon name="phone" />
        <div>
          <h3>Telephone</h3>
          <p>{{ contact.phone }}</p>
        </div>
      </div>
      <div class="contact-detail">
        <AppIcon name="pin" />
        <div>
          <h3>Find us on campus</h3>
          <p>{{ contact.location }}<br />{{ contact.address }}</p>
          <a class="text-link" :href="contact.map" target="_blank" rel="noopener"
            >Open in Google Maps <AppIcon name="external" :size="16"
          /></a>
        </div>
      </div>
      <p class="source-note">
        Contact details from the
        <a :href="contact.source" target="_blank" rel="noopener">published CCS contact page</a>.
      </p>
      <figure class="contact-campus">
        <img src="/images/cpu-campus.webp" alt="CPU campus panorama" loading="lazy" />
        <figcaption>Central Philippine University · Jaro, Iloilo City</figcaption>
      </figure>
    </div>
    <div class="contact-form-panel">
      <span class="demo-badge">DEMONSTRATION FORM</span>
      <h2>How can we help?</h2>
      <p id="form-explanation">
        Try the form below. It validates your entries but does not send or store messages. For a
        real inquiry, email the college directly.
      </p>
      <form
        ref="inquiryForm"
        novalidate
        @submit.prevent="submit"
        @input="edit"
        aria-describedby="form-explanation"
      >
        <div class="form-field">
          <label for="contact-name">Full name <span>(required)</span></label
          >
          <input
            id="contact-name"
            v-model="form.name"
            autocomplete="name"
            maxlength="100"
            placeholder="Your full name"
            :aria-invalid="!!errors.name"
            :aria-describedby="errors.name ? 'error-name' : undefined"
          />
          <p v-if="errors.name" id="error-name" class="field-error">
            {{ errors.name }}
          </p>
        </div>
        <div class="form-field">
          <label for="contact-email">Email address <span>(required)</span></label
          >
          <input
            id="contact-email"
            v-model="form.email"
            type="email"
            autocomplete="email"
            maxlength="254"
            placeholder="you@example.com"
            :aria-invalid="!!errors.email"
            :aria-describedby="errors.email ? 'error-email' : undefined"
          />
          <p v-if="errors.email" id="error-email" class="field-error">
            {{ errors.email }}
          </p>
        </div>
        <div class="form-field">
          <label for="contact-topic">What is your inquiry about? <span>(required)</span></label
          >
          <select
            id="contact-topic"
            v-model="form.topic"
            :aria-invalid="!!errors.topic"
            :aria-describedby="errors.topic ? 'error-topic' : undefined"
          >
            <option value="" disabled>Select a topic</option>
            <option>Academic programs</option>
            <option>Admissions information</option>
            <option>Faculty & staff</option>
            <option>College activities</option>
            <option>Other inquiry</option>
          </select>
          <p v-if="errors.topic" id="error-topic" class="field-error">
            {{ errors.topic }}
          </p>
        </div>
        <div class="form-field">
          <label for="contact-message">Your message <span>(required)</span></label
          >
          <textarea
            id="contact-message"
            v-model="form.message"
            rows="5"
            maxlength="2000"
            placeholder="Tell us what you’d like to know…"
            :aria-invalid="!!errors.message"
            :aria-describedby="errors.message ? 'error-message' : undefined"
          ></textarea>
          <p v-if="errors.message" id="error-message" class="field-error">
            {{ errors.message }}
          </p>
        </div>
        <button type="submit" class="button button-navy submit-button">
          Check inquiry <AppIcon :size="19" />
        </button>
        <div v-if="success" class="form-success" role="status">
          <AppIcon name="check" />
          <div>
            <strong>Your form is complete.</strong>
            <p>
              Demo only — no message was sent or saved. Send your inquiry to
              <a :href="'mailto:' + contact.email">{{ contact.email }}</a
              >.
            </p>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped>
.contact-layout {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 90px;
  align-items: start;
}
.contact-information h2 {
  margin-bottom: 36px;
}
.contact-detail {
  display: flex;
  gap: 17px;
  margin: 25px 0;
}
.contact-detail > svg {
  color: #987339;
  margin-top: 2px;
}
.contact-detail h3 {
  font-size: 0.85rem;
  letter-spacing: 0;
  margin-bottom: 8px;
}
.contact-detail p,
.contact-detail a {
  font-size: 0.84rem;
  color: var(--muted);
  margin-bottom: 10px;
}
.contact-detail .text-link {
  font-size: 0.74rem;
  color: var(--navy);
}
.contact-detail a:hover {
  text-decoration: underline;
}
.contact-campus {
  margin-top: 26px;
}
.contact-campus img {
  width: 100%;
  height: 155px;
  object-fit: cover;
  border-radius: 4px;
}
.contact-form-panel {
  border: 1px solid var(--border);
  border-radius: 5px;
  padding: 37px;
}
.demo-badge {
  display: inline-block;
  font-size: 0.57rem;
  letter-spacing: 0.1em;
  color: #8b6624;
  background: #faf0d8;
  border-radius: 3px;
  padding: 7px 10px;
  font-weight: 650;
  margin-bottom: 18px;
}
.contact-form-panel h2 {
  font-size: 1.7rem;
  margin-bottom: 16px;
}
.contact-form-panel > p {
  font-size: 0.78rem;
  color: var(--muted);
}
.contact-form-panel form {
  margin-top: 28px;
}
.form-field {
  margin-bottom: 22px;
}
.form-field label {
  font-size: 0.77rem;
  font-weight: 600;
  display: block;
  margin-bottom: 9px;
}
.form-field label span {
  font-weight: 400;
  color: var(--muted);
  font-size: 0.67rem;
}
.form-field input,
.form-field select,
.form-field textarea {
  font-size: 0.83rem;
}
.form-field [aria-invalid='true'] {
  border-color: #b74742;
  background: #fffafa;
}
.field-error {
  color: #9b2824;
  font-size: 0.73rem;
  margin: 8px 0 0;
}
.submit-button {
  width: 100%;
}
.form-success {
  display: flex;
  gap: 13px;
  padding: 20px;
  background: #eef5ee;
  border: 1px solid #bbd5bf;
  color: #255831;
  margin-top: 24px;
  border-radius: 4px;
  font-size: 0.8rem;
}
.form-success p {
  margin: 6px 0 0;
  font-size: 0.75rem;
}
.form-success a {
  text-decoration: underline;
}
@media (max-width: 1150px) {
  .contact-layout {
    gap: 55px;
  }
}
@media (max-width: 950px) {
  .contact-layout {
    gap: 35px;
  }
  .contact-form-panel {
    padding: 27px;
  }
  .contact-information h2 {
    font-size: 2.1rem;
  }
}
@media (max-width: 680px) {
  .contact-layout {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .contact-form-panel {
    padding: 26px 22px;
  }
  .contact-information h2 {
    font-size: 2.2rem;
    margin-bottom: 26px;
  }
  .contact-detail {
    margin: 22px 0;
  }
  .contact-detail p,
  .contact-detail a {
    font-size: 0.8rem;
  }
  .contact-campus img {
    height: 170px;
  }
  .contact-form-panel > p {
    font-size: 0.76rem;
  }
  .form-field {
    margin-bottom: 20px;
  }
}
</style>
