// src/components/Footer.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer id="footer" className="w-full bg-muted border-t pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight">Hubungi Kami</h2>
                    <p className="text-muted-foreground mt-2">
                        Punya saran atau pertanyaan? Kami siap mendengar dari Anda.
                    </p>
                </div>

                {/* Konten Utama: Grid Info/Form dan Peta */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
                    {/* Kolom Kiri: Info Kontak dan Form Saran */}
                    <div className="flex flex-col space-y-12">
                        {/* Bagian Info Kontak */}
                        <div className="space-y-4 text-muted-foreground">
                            <h3 className="text-2xl font-semibold text-foreground">Detail Kontak</h3>
                            <div className="flex items-start gap-4">
                                <MapPin className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-foreground">Alamat</h4>
                                    <p>Jl. Kopi Nikmat No. 123, Pangkalpinang, Kepulauan Bangka Belitung</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Phone className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-foreground">Telepon</h4>
                                    <p>(0717) 123-456</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Mail className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-foreground">Email</h4>
                                    <p>kontak@warungngopi.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Bagian Form Saran */}
                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-foreground">Saran & Masukkan</h3>
                            <form className="grid gap-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="footer-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                            Nama
                                        </Label>
                                        <Input id="footer-name" placeholder="Nama Anda" className="col-span-2" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="footer-email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                            Email
                                        </Label>
                                        <Input id="footer-email" type="email" placeholder="Email Anda" className="col-span-2" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="footer-message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                        Saran & Masukan
                                    </Label>
                                    <Textarea
                                        id="footer-message"
                                        placeholder="Tuliskan pesan Anda di sini..."
                                        rows={4}
                                        className="resize-none"
                                    />
                                </div>
                                <Button type="submit" className="w-full">Kirim Pesan</Button>
                            </form>
                        </div>
                    </div>

                    {/* Kolom Kanan: Peta */}
                    <div className="flex flex-col">
                        <h3 className="text-2xl font-semibold mb-4">Lokasi Kami</h3>
                        <div className="w-full h-full min-h-[400px] lg:min-h-full overflow-hidden rounded-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.969648939611!2d106.11583067401306!3d-2.133709937346743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e22c710922881af%3A0x4c27f3f9e9c40466!2sAlun-alun%20Taman%20Merdeka!5e0!3m2!1sen!2sid!4v1721531234567!5m2!1sen!2sid"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>

                {/* Garis Pemisah */}
                <hr className="border-border" />

                {/* Bagian Bawah: Copyright dan Sosial Media */}
                <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground text-center sm:text-left">
                        © {new Date().getFullYear()} WarungNgopi. Dibuat dengan ❤️ di Pangkalpinang.
                    </p>
                    <div className="flex gap-2">
                        <Button variant="ghost" size="icon" asChild>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <Instagram className="h-5 w-5" />
                            </a>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <Twitter className="h-5 w-5" />
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    );
}