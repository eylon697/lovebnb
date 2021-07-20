import Vue from 'vue'
export const eventBus = new Vue()

export const SHOW_MSG = 'show-msg';

export function showMsg(txt, type = 'success') {
    eventBus.$emit(SHOW_MSG, { txt, type });
}