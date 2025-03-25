import { users, type User, type InsertUser, type Contact, type InsertContact } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactSubmission(contact: InsertContact): Promise<Contact>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, Contact>;
  currentId: number;
  contactId: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.currentId = 1;
    this.contactId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  async createContactSubmission(insertContact: InsertContact): Promise<Contact> {
    const id = this.contactId++;
    const timestamp = new Date();
    const contact: Contact = { 
      ...insertContact, 
      id, 
      phone: insertContact.phone || null, // Ensure phone is string or null, not undefined
      createdAt: timestamp,
      isRead: false
    };
    this.contacts.set(id, contact);
    console.log(`Contact form submission received: ${contact.name} (${contact.email})`);
    return contact;
  }
}

export const storage = new MemStorage();
