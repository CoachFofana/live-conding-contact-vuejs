import { defineStore } from "pinia";
import { reactive } from "vue";

export const useContactStore = defineStore('contactStore', {
    state: () => (
        {
            contacts: [
                {
                    id: 1,
                    name: "Ag",
                    number: "32022532",
                    email: "ag@gmail.com"
                },
                {
                    id: 2,
                    name: "Aichetou Taher",
                    number: "34556677",
                    email: "taher@gmail.com"
                },
                {
                    id: 3,
                    name: "Harouna FOFANA",
                    number: "66554433",
                    email: "harouna@gmail.com"
                },
                {
                    id: 4,
                    name: "Mariem FOFANA",
                    number: "66554433",
                    email: "mariem@gmail.com"
                }
            ],
            currentContact: null,
            contactForm: reactive({
                name: null,
                number: null,
                email: null
            }),
            id: 0
        }
    ),
    actions: {
        getContactById(id) {
            // const contact =  this.contacts.find(c => c.id == id);
            // if(contact){
            //     Object.assign(this.contactForm, contact)
            // }
            if (!id) return null;
            return this.contacts.find(c => c.id == id);
        },
        add() {
            const maxId = this.contacts.length > 0 ? Math.max(...this.contacts.map(c => c.id)) : 0;
            const newId = maxId + 1;
            this.contacts.push(
                {
                    id: newId,
                    ...this.contactForm
                }
            )

            Object.assign(this.contactForm, {
                name: null,
                number: null,
                email: null
            })
        },
        edit(id, newContact) {
            const contactIndex = this.contacts.findIndex(c => c.id === id);
            if (contactIndex !== -1) {
                this.contacts[contactIndex] = {
                    ...id,
                    newContact
                }
            }
        },
        show(id) {
            const contactIndex = this.contacts.findIndex(c => c.id === id);
            if (contactIndex !== -1) {
                this.currentContact = this.contacts[contactIndex];
            }
        },
        remove(id) {
            
                this.contacts = this.contacts.filter(contact => contact.id !== id);
            
        }

    },
}); 