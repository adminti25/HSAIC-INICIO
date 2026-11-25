(() => {
  const DATOS = {
 "extensiones": [
  {
   "id": 1,
   "contact": "Acceso Burdeos",
   "extension": "31910",
   "orden": 0
  },
  {
   "id": 2,
   "contact": "Modulo Acrópolis",
   "extension": "31084",
   "orden": 1
  },
  {
   "id": 3,
   "contact": "Supervisor de Visitas",
   "extension": "31058",
   "orden": 2
  },
  {
   "id": 4,
   "contact": "Ejecutivos de admisión Hospitalaria 2",
   "extension": "31011",
   "orden": 3
  },
  {
   "id": 5,
   "contact": "Ejecutivos Admisión Urgencias 1",
   "extension": "31018",
   "orden": 4
  },
  {
   "id": 6,
   "contact": "Analista de CXC",
   "extension": "31045",
   "orden": 5
  },
  {
   "id": 7,
   "contact": "Jefatura de Servicios Generales",
   "extension": "31078",
   "orden": 6
  },
  {
   "id": 8,
   "contact": "Analista de compras Medicamentos",
   "extension": "31030",
   "orden": 7
  },
  {
   "id": 9,
   "contact": "Analista de compras Vistas",
   "extension": "31046",
   "orden": 8
  },
  {
   "id": 10,
   "contact": "Analista de compras Materiales",
   "extension": "31047",
   "orden": 9
  },
  {
   "id": 11,
   "contact": "Facturación",
   "extension": "31038",
   "orden": 10
  },
  {
   "id": 12,
   "contact": "Analista Caja Facturación",
   "extension": "31039",
   "orden": 11
  },
  {
   "id": 13,
   "contact": "Mesa de Control 2",
   "extension": "31016",
   "orden": 12
  },
  {
   "id": 63,
   "contact": "Auxiliar Archivo Clinico",
   "extension": "31065",
   "orden": 62
  },
  {
   "id": 64,
   "contact": "Analista de Cuentas",
   "extension": "31035",
   "orden": 63
  },
  {
   "id": 65,
   "contact": "Coordinación de Nominas",
   "extension": "31056",
   "orden": 64
  },
  {
   "id": 66,
   "contact": "COE Auditorio",
   "extension": "31092",
   "orden": 65
  },
  {
   "id": 67,
   "contact": "Caja General",
   "extension": "31010",
   "orden": 66
  },
  {
   "id": 68,
   "contact": "Central Labor",
   "extension": "31090",
   "orden": 67
  },
  {
   "id": 69,
   "contact": "Central Urgencias",
   "extension": "31005",
   "orden": 68
  },
  {
   "id": 70,
   "contact": "Central de Enfermería Piso 2",
   "extension": "31102",
   "orden": 69
  },
  {
   "id": 71,
   "contact": "Central de Enfermería Piso 3",
   "extension": "31103",
   "orden": 70
  },
  {
   "id": 72,
   "contact": "Central de Enfermería Piso 4",
   "extension": "31104",
   "orden": 71
  },
  {
   "id": 73,
   "contact": "Ceye Quirofano",
   "extension": "31022",
   "orden": 72
  },
  {
   "id": 74,
   "contact": "Clinica de Cateteres",
   "extension": "31088",
   "orden": 73
  },
  {
   "id": 76,
   "contact": "Recepción Hospital 1",
   "extension": "31000",
   "orden": 75
  },
  {
   "id": 79,
   "contact": "Consulta Externa",
   "extension": "31201",
   "orden": 78
  },
  {
   "id": 86,
   "contact": "Dirección de F Y A",
   "extension": "31029",
   "orden": 85
  },
  {
   "id": 87,
   "contact": "Contador Ingresos CP",
   "extension": "31033",
   "orden": 86
  },
  {
   "id": 88,
   "contact": "Contador Egresos CP",
   "extension": "31040",
   "orden": 87
  },
  {
   "id": 89,
   "contact": "Analista de Nominas CP",
   "extension": "31063",
   "orden": 88
  },
  {
   "id": 90,
   "contact": "Nominas",
   "extension": "31055",
   "orden": 89
  },
  {
   "id": 91,
   "contact": "Gerente Contable",
   "extension": "31043",
   "orden": 90
  },
  {
   "id": 92,
   "contact": "Coordinación de prestaciones",
   "extension": "31051",
   "orden": 91
  },
  {
   "id": 93,
   "contact": "Jefe de Mesa de Control",
   "extension": "31032",
   "orden": 92
  },
  {
   "id": 94,
   "contact": "Descanso de Medicos",
   "extension": "31027",
   "orden": 93
  },
  {
   "id": 95,
   "contact": "Supervisores de Mesa de Control",
   "extension": "31068",
   "orden": 94
  },
  {
   "id": 96,
   "contact": "Central Urgencias 2",
   "extension": "31013",
   "orden": 95
  },
  {
   "id": 97,
   "contact": "Clinica de Endoscopia",
   "extension": "31091",
   "orden": 96
  },
  {
   "id": 98,
   "contact": "Unidad de Cuidado Coronarios",
   "extension": "31012",
   "orden": 97
  },
  {
   "id": 99,
   "contact": "Jefatura de Imagen",
   "extension": "31097",
   "orden": 98
  },
  {
   "id": 100,
   "contact": "Dirección Medica",
   "extension": "31024",
   "orden": 99
  },
  {
   "id": 101,
   "contact": "Oficina de Jefaturas Medicas",
   "extension": "31021",
   "orden": 100
  },
  {
   "id": 103,
   "contact": "Ejecutivos de admisión Hospitalaria 1",
   "extension": "31001",
   "orden": 102
  },
  {
   "id": 105,
   "contact": "Central Hermodinamia",
   "extension": "31101",
   "orden": 104
  },
  {
   "id": 106,
   "contact": "Supervisión de Facturación",
   "extension": "31037",
   "orden": 105
  },
  {
   "id": 107,
   "contact": "Unidad de Quimioterapia",
   "extension": "31107",
   "orden": 106
  },
  {
   "id": 108,
   "contact": "Auxiliares Farmacia",
   "extension": "31109",
   "orden": 107
  },
  {
   "id": 164,
   "contact": "IGSA Caja Restaurante",
   "extension": "31075",
   "orden": 163
  },
  {
   "id": 165,
   "contact": "Supervisión Botiquín",
   "extension": "31099",
   "orden": 164
  },
  {
   "id": 166,
   "contact": "Jefe de TI",
   "extension": "31083",
   "orden": 165
  },
  {
   "id": 167,
   "contact": "Jefe de Calidad",
   "extension": "31081",
   "orden": 166
  },
  {
   "id": 169,
   "contact": "Analista de TI",
   "extension": "31108",
   "orden": 168
  },
  {
   "id": 170,
   "contact": "Analista Seguridad Hospitalaria",
   "extension": "31067",
   "orden": 169
  },
  {
   "id": 171,
   "contact": "Jefatura de Mantenimiento",
   "extension": "31061",
   "orden": 170
  },
  {
   "id": 172,
   "contact": "Caja Médicos",
   "extension": "31034",
   "orden": 171
  },
  {
   "id": 173,
   "contact": "Supervisión Almacen",
   "extension": "31036",
   "orden": 172
  },
  {
   "id": 174,
   "contact": "Enseñanza",
   "extension": "31053",
   "orden": 173
  },
  {
   "id": 175,
   "contact": "Jefe de Suministros",
   "extension": "31042",
   "orden": 174
  },
  {
   "id": 176,
   "contact": "Embajadores B2C",
   "extension": "31082",
   "orden": 175
  },
  {
   "id": 177,
   "contact": "Central Cunas",
   "extension": "31020",
   "orden": 176
  },
  {
   "id": 178,
   "contact": "Coordinación de Capacitación",
   "extension": "31052",
   "orden": 177
  },
  {
   "id": 179,
   "contact": "Sub Ceye",
   "extension": "31028",
   "orden": 178
  },
  {
   "id": 180,
   "contact": "Jefe CXC",
   "extension": "31059",
   "orden": 179
  },
  {
   "id": 181,
   "contact": "Dirección de B2B",
   "extension": "31069",
   "orden": 180
  },
  {
   "id": 182,
   "contact": "Ejecutivos Admisión Urgencias 2",
   "extension": "31064",
   "orden": 181
  },
  {
   "id": 183,
   "contact": "Dirección de I Y S",
   "extension": "31041",
   "orden": 182
  },
  {
   "id": 184,
   "contact": "Directora Enfermería",
   "extension": "31025",
   "orden": 183
  },
  {
   "id": 185,
   "contact": "Jefatura de Relaciones Publicas",
   "extension": "31002",
   "orden": 184
  },
  {
   "id": 187,
   "contact": "Jefatura de Compras",
   "extension": "31048",
   "orden": 186
  },
  {
   "id": 188,
   "contact": "Dirección de Capital Humano",
   "extension": "31057",
   "orden": 187
  },
  {
   "id": 189,
   "contact": "Recepción imagenologia 2",
   "extension": "31014",
   "orden": 188
  },
  {
   "id": 190,
   "contact": "Jefatura de Archivo Clínico",
   "extension": "31062",
   "orden": 189
  },
  {
   "id": 191,
   "contact": "Coordinación Reclutamiento",
   "extension": "31049",
   "orden": 190
  },
  {
   "id": 193,
   "contact": "Analista de Reclutamiento",
   "extension": "31050",
   "orden": 192
  },
  {
   "id": 195,
   "contact": "UCC",
   "extension": "31100",
   "orden": 194
  },
  {
   "id": 196,
   "contact": "UCI",
   "extension": "31071",
   "orden": 195
  },
  {
   "id": 197,
   "contact": "Coordinación de UVH",
   "extension": "31086",
   "orden": 196
  },
  {
   "id": 198,
   "contact": "Recuperación Quirófano",
   "extension": "31019",
   "orden": 197
  },
  {
   "id": 199,
   "contact": "Programación Quirófano",
   "extension": "31026",
   "orden": 198
  },
  {
   "id": 200,
   "contact": "Quirófano",
   "extension": "31098",
   "orden": 199
  },
  {
   "id": 201,
   "contact": "Supervisor de Facturación Caja",
   "extension": "31044",
   "orden": 200
  },
  {
   "id": 202,
   "contact": "Ejecutivos Mesa de Control",
   "extension": "31094",
   "orden": 201
  },
  {
   "id": 203,
   "contact": "Jefe Mesa de Control",
   "extension": "31003",
   "orden": 202
  },
  {
   "id": 204,
   "contact": "Mesa de Control 1",
   "extension": "31015",
   "orden": 203
  },
  {
   "id": 206,
   "contact": "Nutricion Hospitalaria",
   "extension": "31076",
   "orden": 205
  },
  {
   "id": 207,
   "contact": "Jefe de Farmacovigilancia",
   "extension": "31073",
   "orden": 206
  },
  {
   "id": 208,
   "contact": "Analista de Calidad QFI",
   "extension": "31066",
   "orden": 207
  },
  {
   "id": 209,
   "contact": "Jefa de Farmacia QFB",
   "extension": "31096",
   "orden": 208
  },
  {
   "id": 211,
   "contact": "Recepcion Laboratorio",
   "extension": "31006",
   "orden": 210
  },
  {
   "id": 213,
   "contact": "Recepción Laboratorio 1",
   "extension": "31095",
   "orden": 212
  },
  {
   "id": 214,
   "contact": "Recepción imagenología",
   "extension": "31004",
   "orden": 213
  },
  {
   "id": 218,
   "contact": "Suministros Pisos",
   "extension": "31074",
   "orden": 217
  },
  {
   "id": 219,
   "contact": "Supervisores de Enfermería",
   "extension": "31054",
   "orden": 218
  },
  {
   "id": 220,
   "contact": "Jefe de Terapia Respiratoria",
   "extension": "31070",
   "orden": 219
  },
  {
   "id": 221,
   "contact": "Unidad de Endoscopia",
   "extension": "31105",
   "orden": 220
  },
  {
   "id": 223,
   "contact": "Modulo San ángel Inn Inbursa",
   "extension": "31080",
   "orden": 222
  },
  {
   "id": 224,
   "contact": "Administración Torre",
   "extension": "31992",
   "orden": 223
  },
  {
   "id": 225,
   "contact": "Clínica de Cateres",
   "extension": "31406",
   "orden": 224
  },
  {
   "id": 226,
   "contact": "UCI 2",
   "extension": "31072",
   "orden": 225
  }
 ],
 "mantenimiento": [
  {
   "id": 1,
   "name": "CEyE y SUB CEyE",
   "url": "https://grupohospitalario.sharepoint.com/sites/HospitalesSanAngelInn/Documentos%20compartidos/Forms/AllItems.aspx?id=%2Fsites%2FHospitalesSanAngelInn%2FDocumentos%20compartidos%2FHospitales%2FChapultepec%2FDirecci%C3%B3n%20de%20Infraestructura%20y%20Servicios%2FJefatura%20de%20Biomedica%2F1%2E%20ORDENES%20DE%20SERVICIO%2FCEyE%20y%20SUB%20CEyE&p=true&ga=1",
   "orden": 0
  },
  {
   "id": 2,
   "name": "Hemodinamia",
   "url": "https://grupohospitalario.sharepoint.com/sites/HospitalesSanAngelInn/Documentos%20compartidos/Forms/AllItems.aspx?id=%2Fsites%2FHospitalesSanAngelInn%2FDocumentos%20compartidos%2FHospitales%2FChapultepec%2FDirecci%C3%B3n%20de%20Infraestructura%20y%20Servicios%2FJefatura%20de%20Biomedica%2F1%2E%20ORDENES%20DE%20SERVICIO%2FHemodinamia&p=true&ga=1",
   "orden": 1
  },
  {
   "id": 3,
   "name": "Hospitalización",
   "url": "https://grupohospitalario.sharepoint.com/sites/HospitalesSanAngelInn/Documentos%20compartidos/Forms/AllItems.aspx?id=%2Fsites%2FHospitalesSanAngelInn%2FDocumentos%20compartidos%2FHospitales%2FChapultepec%2FDirecci%C3%B3n%20de%20Infraestructura%20y%20Servicios%2FJefatura%20de%20Biomedica%2F1%2E%20ORDENES%20DE%20SERVICIO%2FHospitalizaci%C3%B3n&p=true&ga=1",
   "orden": 2
  },
  {
   "id": 4,
   "name": "Imagenología",
   "url": "https://grupohospitalario.sharepoint.com/sites/HospitalesSanAngelInn/Documentos%20compartidos/Forms/AllItems.aspx?id=%2Fsites%2FHospitalesSanAngelInn%2FDocumentos%20compartidos%2FHospitales%2FChapultepec%2FDirecci%C3%B3n%20de%20Infraestructura%20y%20Servicios%2FJefatura%20de%20Biomedica%2F1%2E%20ORDENES%20DE%20SERVICIO%2FImagenolog%C3%ADa&p=true&ga=1",
   "orden": 3
  },
  {
   "id": 5,
   "name": "Ingeniería Biomédica",
   "url": "https://grupohospitalario.sharepoint.com/sites/HospitalesSanAngelInn/Documentos%20compartidos/Forms/AllItems.aspx?id=%2Fsites%2FHospitalesSanAngelInn%2FDocumentos%20compartidos%2FHospitales%2FChapultepec%2FDirecci%C3%B3n%20de%20Infraestructura%20y%20Servicios%2FJefatura%20de%20Biomedica%2F1%2E%20ORDENES%20DE%20SERVICIO%2FIngenier%C3%ADa%20Biom%C3%A9dica&p=true&ga=1",
   "orden": 4
  },
  {
   "id": 6,
   "name": "Labor",
   "url": "https://grupohospitalario.sharepoint.com/sites/HospitalesSanAngelInn/Documentos%20compartidos/Forms/AllItems.aspx?id=%2Fsites%2FHospitalesSanAngelInn%2FDocumentos%20compartidos%2FHospitales%2FChapultepec%2FDirecci%C3%B3n%20de%20Infraestructura%20y%20Servicios%2FJefatura%20de%20Biomedica%2F1%2E%20ORDENES%20DE%20SERVICIO%2FLabor&p=true&ga=1",
   "orden": 5
  },
  {
   "id": 7,
   "name": "Laboratorio Clínico",
   "url": "https://grupohospitalario.sharepoint.com/sites/HospitalesSanAngelInn/Documentos%20compartidos/Forms/AllItems.aspx?id=%2Fsites%2FHospitalesSanAngelInn%2FDocumentos%20compartidos%2FHospitales%2FChapultepec%2FDirecci%C3%B3n%20de%20Infraestructura%20y%20Servicios%2FJefatura%20de%20Biomedica%2F1%2E%20ORDENES%20DE%20SERVICIO%2FLaboratorio%20Cl%C3%ADnico&p=true&ga=1",
   "orden": 6
  },
  {
   "id": 8,
   "name": "Quirófano",
   "url": "https://grupohospitalario.sharepoint.com/sites/HospitalesSanAngelInn/Documentos%20compartidos/Forms/AllItems.aspx?id=%2Fsites%2FHospitalesSanAngelInn%2FDocumentos%20compartidos%2FHospitales%2FChapultepec%2FDirecci%C3%B3n%20de%20Infraestructura%20y%20Servicios%2FJefatura%20de%20Biomedica%2F1%2E%20ORDENES%20DE%20SERVICIO%2FQuir%C3%B3fano&p=true&ga=1",
   "orden": 7
  },
  {
   "id": 9,
   "name": "Transfusión",
   "url": "https://grupohospitalario.sharepoint.com/sites/HospitalesSanAngelInn/Documentos%20compartidos/Forms/AllItems.aspx?id=%2Fsites%2FHospitalesSanAngelInn%2FDocumentos%20compartidos%2FHospitales%2FChapultepec%2FDirecci%C3%B3n%20de%20Infraestructura%20y%20Servicios%2FJefatura%20de%20Biomedica%2F1%2E%20ORDENES%20DE%20SERVICIO%2FTransfusi%C3%B3n&p=true&ga=1",
   "orden": 8
  },
  {
   "id": 10,
   "name": "Unidad de Cuidados Coronarios",
   "url": "https://grupohospitalario.sharepoint.com/sites/HospitalesSanAngelInn/Documentos%20compartidos/Forms/AllItems.aspx?id=%2Fsites%2FHospitalesSanAngelInn%2FDocumentos%20compartidos%2FHospitales%2FChapultepec%2FDirecci%C3%B3n%20de%20Infraestructura%20y%20Servicios%2FJefatura%20de%20Biomedica%2F1%2E%20ORDENES%20DE%20SERVICIO%2FUnidad%20de%20Cuidados%20Coronarios&p=true&ga=1",
   "orden": 9
  },
  {
   "id": 11,
   "name": "Unidad de Cuidados Intensivos",
   "url": "https://grupohospitalario.sharepoint.com/sites/HospitalesSanAngelInn/Documentos%20compartidos/Forms/AllItems.aspx?id=%2Fsites%2FHospitalesSanAngelInn%2FDocumentos%20compartidos%2FHospitales%2FChapultepec%2FDirecci%C3%B3n%20de%20Infraestructura%20y%20Servicios%2FJefatura%20de%20Biomedica%2F1%2E%20ORDENES%20DE%20SERVICIO%2FUnidad%20de%20Cuidados%20Intensivos&p=true&ga=1",
   "orden": 10
  },
  {
   "id": 12,
   "name": "Unidad de Cuidados Intensivos Neonatales",
   "url": "https://grupohospitalario.sharepoint.com/sites/HospitalesSanAngelInn/Documentos%20compartidos/Forms/AllItems.aspx?id=%2Fsites%2FHospitalesSanAngelInn%2FDocumentos%20compartidos%2FHospitales%2FChapultepec%2FDirecci%C3%B3n%20de%20Infraestructura%20y%20Servicios%2FJefatura%20de%20Biomedica%2F1%2E%20ORDENES%20DE%20SERVICIO%2FUnidad%20de%20Cuidados%20Intensivos%20Neonatales&p=true&ga=1",
   "orden": 11
  },
  {
   "id": 13,
   "name": "Unidad de Medicina Respiratoria",
   "url": "https://grupohospitalario.sharepoint.com/sites/HospitalesSanAngelInn/Documentos%20compartidos/Forms/AllItems.aspx?id=%2Fsites%2FHospitalesSanAngelInn%2FDocumentos%20compartidos%2FHospitales%2FChapultepec%2FDirecci%C3%B3n%20de%20Infraestructura%20y%20Servicios%2FJefatura%20de%20Biomedica%2F1%2E%20ORDENES%20DE%20SERVICIO%2FUnidad%20de%20Medicina%20Respiratoria&p=true&ga=1",
   "orden": 12
  },
  {
   "id": 14,
   "name": "Urgencias",
   "url": "https://grupohospitalario.sharepoint.com/sites/HospitalesSanAngelInn/Documentos%20compartidos/Forms/AllItems.aspx?id=%2Fsites%2FHospitalesSanAngelInn%2FDocumentos%20compartidos%2FHospitales%2FChapultepec%2FDirecci%C3%B3n%20de%20Infraestructura%20y%20Servicios%2FJefatura%20de%20Biomedica%2F1%2E%20ORDENES%20DE%20SERVICIO%2FUrgencias&p=true&ga=1",
   "orden": 13
  },
  {
   "id": 15,
   "name": "Calibración de Termómetros y Termohigrómetros",
   "url": "https://grupohospitalario.sharepoint.com/sites/HospitalesSanAngelInn/Documentos%20compartidos/Forms/AllItems.aspx?id=%2Fsites%2FHospitalesSanAngelInn%2FDocumentos%20compartidos%2FHospitales%2FChapultepec%2FDirecci%C3%B3n%20de%20Infraestructura%20y%20Servicios%2FJefatura%20de%20Biomedica%2F1%2E%20ORDENES%20DE%20SERVICIO%2FCalibracion%20de%20Termometros%20y%20Termohigrometros&p=true&ga=1",
   "orden": 14
  }
 ],
 "enlaces": [
  {
   "id": 1,
   "name": "Intramed - H Chapultepec",
   "url": "https://hsai.intramed.mx/h-chapultepec/",
   "orden": 0
  },
  {
   "id": 2,
   "name": "Jira Services",
   "url": "https://hsai.atlassian.net/servicedesk/customer/portals",
   "orden": 1
  },
  {
   "id": 3,
   "name": "Edenmed",
   "url": "https://apps.evacenter.com/login",
   "orden": 2
  },
  {
   "id": 4,
   "name": "GMQ QUALITAS",
   "url": "https://gastosmedicos.qualitas.com.mx/gmq-frontend/gmq-qualitas-frontend/#/login",
   "orden": 3
  }
 ],
 "accesos": [
  {
   "id": 1,
   "name": "CARPETA NARANJA",
   "url": "https://grupohospitalario.sharepoint.com/:b:/s/HospitalesSanAngelInn/IQBDagom1FIiRphiEtAOyWAFAUkx6t23fJt8VTN8d753b1w?e=7N1Lqx",
   "className": "orange-folder",
   "orden": 0
  },
  {
   "id": 2,
   "name": "CUADRO BASICO DE MEDICAMENTOS",
   "url": "https://grupohospitalario.sharepoint.com/:b:/s/HospitalesSanAngelInn/IQDj7FymerXOR4yaFiQ1LeWEAcygKv0anPqNFnmdQZTuRoc?e=FDRkfg",
   "className": "blue-folder",
   "orden": 1
  },
  {
   "id": 3,
   "name": "GACETA CHAPULTEPEC",
   "url": "https://grupohospitalario.sharepoint.com/:b:/s/HospitalesSanAngelInn/IQBjS39WNoZOQ41LYpW_H3UCAcv2PE3caI60QaztE-PPBPI?e=igFCpj",
   "className": "neutral-folder",
   "orden": 2
  },
  {
   "id": 4,
   "name": "GUIA CAHUSA",
   "url": "https://grupohospitalario.sharepoint.com/sites/HospitalesSanAngelInn/Documentos%20compartidos/Forms/AllItems.aspx?id=%2Fsites%2FHospitalesSanAngelInn%2FDocumentos%20compartidos%2FHospitales%2FChapultepec%2FTecnologias%20de%20la%20Informacion%2FP%C3%A1gina%20de%20Inicio%2FINFOGRAFIAS%5FCAHUSA%2Epdf&parent=%2Fsites%2FHospitalesSanAngelInn%2FDocumentos%20compartidos%2FHospitales%2FChapultepec%2FTecnologias%20de%20la%20Informacion%2FP%C3%A1gina%20de%20Inicio&p=true&ct=1793998656841&or=Teams%2DHL&ga=1&LOF=1",
   "className": "red-folder",
   "orden": 3
  }
 ],
 "beneficios": [
  {
   "id": 1,
   "clave": "bienvenida",
   "titulo": "Bienvenida",
   "html": "<header class=\"ben-bienv\">\n  <div class=\"ben-bienv__txt\">\n    <p class=\"ben-bienv__sup\">Programa de Beneficios Organizacionales</p>\n    <h3 class=\"ben-bienv__tit\">¡Estimadas y estimados colaboradores(as)!</h3>\n    <p>Ser parte de HSAIC significa mucho más que formar parte de un equipo; significa crecer, compartir y construir juntos. Por eso, queremos que conozcas todo lo que tenemos para ti y tu familia.</p>\n    <p>Esta guía reúne los beneficios que reconocen tu esfuerzo y buscan contribuir a tu bienestar dentro y fuera del hospital. Descúbrelos, aprovéchalos y disfruta de todo lo que significa ser parte de HSAIC.</p>\n    <p class=\"ben-bienv__lema\">Porque estamos cerca de ti para cuidarte.</p>\n  </div>\n  <a class=\"ben-bienv__cartel\" href=\"https://beneficios-hsaic.netlify.app\" target=\"_blank\" rel=\"noopener noreferrer\" title=\"Abrir beneficios-hsaic.netlify.app\" aria-label=\"Abrir el sitio del Programa de Beneficios Organizacionales, beneficios-hsaic.netlify.app (se abre en una pestaña nueva)\">\n    <img src=\"./beneficios/cartel-beneficios.jpg\" alt=\"Cartel del Programa de Beneficios Organizacionales con código QR para escanear\" width=\"800\" height=\"1433\" loading=\"lazy\" decoding=\"async\">\n  </a>\n</header>",
   "orden": 0
  },
  {
   "id": 2,
   "clave": "sgmm",
   "titulo": "Seguro de Gastos Médicos Mayores",
   "html": "<article class=\"ben-card ben-card--sgmm\">\n  <header class=\"ben-cab\">\n    <span class=\"ben-num\" aria-hidden=\"true\">1</span>\n    <div>\n      <h3 class=\"ben-tit\">Seguro de Gastos Médicos Mayores</h3>\n      <p class=\"ben-sub\">SGMM · Hospitales San Ángel Inn · Seguros SURA</p>\n    </div>\n  </header>\n\n  <p class=\"ben-intro\">¡Entérate del Seguro de Gastos Médicos Mayores que tenemos para ti!</p>\n\n  <section class=\"ben-sec\">\n    <h4 class=\"ben-sec__tit\"><span class=\"ben-sec__n\">01</span>¿Qué incluye mi SGMM?</h4>\n    <ul class=\"ben-lista\">\n      <li>Cobertura de hasta <span class=\"ben-monto\">$5,000,000</span> (por accidente o enfermedad)</li>\n      <li>En tu SGMM <strong>incluye un plan dental</strong> con acceso a tratamientos gratis y descuentos adicionales.</li>\n      <li><strong>Extensible a Familiares</strong> de Primera Línea (pareja / hijos)</li>\n      <li>Atención únicamente en todos los <strong>Hospitales San Ángel Inn</strong> y lo mejor es que nuestra red de médicos te puede atender</li>\n      <li>Cubriendo <strong>cualquier especialidad</strong> (este SGMM no incluye a los médicos en torres de consultorios)</li>\n      <li>Gastos funerarios por <span class=\"ben-monto\">$30,000</span></li>\n    </ul>\n  </section>\n\n  <section class=\"ben-sec\">\n    <h4 class=\"ben-sec__tit\"><span class=\"ben-sec__n\">02</span>¿Qué es lo que debo pagar con mi SGMM?</h4>\n    <ul class=\"ben-lista\">\n      <li>Cargo vía nómina de <span class=\"ben-monto\">$400</span> quincenales, aplicable a partir de la obtención de tu <strong>contrato de base</strong>.</li>\n      <li>En caso de <strong>enfermedad</strong>, realizas una <strong>aportación de</strong> <span class=\"ben-monto\">$4,000</span> más el <span class=\"ben-monto\">10%</span> de coaseguro.</li>\n      <li>En caso de <strong>accidente</strong>, no tienes deducible, solo una aportación del <span class=\"ben-monto\">10%</span> de coaseguro (un máximo de <span class=\"ben-monto\">$30,000</span>).</li>\n      <li>¡Tu SGMM cubre la hospitalización, honorarios médicos, medicamentos y terapias o recuperación!</li>\n    </ul>\n  </section>\n\n  <section class=\"ben-sec\">\n    <h4 class=\"ben-sec__tit\"><span class=\"ben-sec__n\">03</span>¿Qué tengo que hacer para contratar mi SGMM?</h4>\n    <ol class=\"ben-pasos\">\n      <li>Acércate al área de <strong>Nóminas</strong> solicitando el formato para la autorización de tu descuento vía nómina.</li>\n      <li><strong>Seguros Franchini</strong> llevará a cabo tu alta como asegurado.</li>\n      <li>El ejecutivo de <strong>Seguros Franchini</strong> se pone en contacto contigo para obtener más información en caso de que quisieras asegurar a tu familia y posterior iniciar el trámite.</li>\n    </ol>\n  </section>\n\n  <section class=\"ben-sec\">\n    <h4 class=\"ben-sec__tit\"><span class=\"ben-sec__n\">04</span>Información a tomar en cuenta</h4>\n    <ul class=\"ben-lista\">\n      <li>La edad máxima para que puedas utilizar tu SGMM es de <span class=\"ben-monto\">65 años</span>.</li>\n      <li>Los médicos que te pueden atender son los médicos que trabajan en los diferentes hospitales del grupo.</li>\n      <li>Solo puedes asegurar a tu <strong>pareja e hijos</strong>. No extensible a padres, hermanos, etc.</li>\n      <li>Únicamente puedes hacer uso de tu SGMM en <strong>las unidades hospitalarias</strong> que conforman nuestro grupo. En caso de encontrarte fuera de la CDMX tienes acceso a la red de hospitales de <strong>Sura México</strong>.</li>\n    </ul>\n  </section>\n\n  <section class=\"ben-sec\">\n    <h4 class=\"ben-sec__tit ben-sec__tit--barra\">¿Tienes más dudas acerca de tu SGMM?</h4>\n    <ul class=\"ben-contacto\">\n      <li><span class=\"ben-ext\"><svg class=\"ic\" aria-hidden=\"true\"><use href=\"#i-phone\"/></svg><span>Informes con C.P. Alma Posadas · <strong>Ext. 31055</strong></span></span></li>\n      <li><a href=\"tel:+525625853322\"><svg class=\"ic\" aria-hidden=\"true\"><use href=\"#i-phone\"/></svg>56 2585 3322</a></li>\n      <li><a href=\"mailto:contacto@segurosfranchini.com\"><svg class=\"ic\" aria-hidden=\"true\"><use href=\"#i-mail\"/></svg>contacto@segurosfranchini.com</a></li>\n    </ul>\n    <a class=\"ben-enlace\" href=\"https://me-qr.com/NEwhXpNy\" target=\"_blank\" rel=\"noopener noreferrer\">\n      <svg class=\"ic\" aria-hidden=\"true\"><use href=\"#i-link\"/></svg>\n      <span class=\"ben-enlace__txt\"><b>Más información</b><span>https://me-qr.com/<wbr>NEwhXpNy</span></span>\n    </a>\n  </section>\n\n  <p class=\"ben-lema\">¡Cada elección que hacemos cuenta, elige cuidarte a ti mismo!</p>\n</article>",
   "orden": 1
  },
  {
   "id": 3,
   "clave": "membresia",
   "titulo": "Membresía Empresarial",
   "html": "<article class=\"ben-card ben-card--membresia\">\n  <header class=\"ben-cab\">\n    <span class=\"ben-num\" aria-hidden=\"true\">2</span>\n    <div>\n      <h3 class=\"ben-tit\">Membresía Empresarial</h3>\n      <p class=\"ben-sub\">Hospital San Ángel Inn Chapultepec</p>\n    </div>\n  </header>\n\n  <p class=\"ben-intro\">Ahora puedes acceder a beneficios saludables para los colaboradores de tu empresa y su familia.</p>\n\n  <section class=\"ben-sec\">\n    <h4 class=\"ben-sec__tit ben-sec__tit--barra\">¿Quién puede usarla?</h4>\n    <ul class=\"ben-lista\">\n      <li>Beneficio disponible desde tu ingreso (aplica para personal de nómina y honorarios).</li>\n      <li>Extensivo a <strong>familiares y amigos</strong>, con registro individual.</li>\n      <li>Aplica únicamente en <strong>HSAI Chapultepec</strong> (no aplica para consultas de Torre Médica).</li>\n    </ul>\n  </section>\n\n  <section class=\"ben-sec\">\n    <h4 class=\"ben-sec__tit ben-sec__tit--barra\">Tus beneficios</h4>\n    <div class=\"ben-scroll\">\n      <table class=\"ben-tabla ben-tabla--r\">\n        <thead>\n          <tr>\n            <th scope=\"col\">Concepto</th>\n            <th scope=\"col\">Beneficio</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr><th scope=\"rowgroup\" colspan=\"2\">Consultas externas</th></tr>\n          <tr><td>1 consulta de medicina general sin costo (semestral)</td><td><span class=\"ben-monto\" aria-hidden=\"true\">✓</span><span class=\"sr\">Incluida</span></td></tr>\n          <tr><td>Consultas de ginecología, precio preferencial</td><td><span class=\"ben-monto\">$423.13</span></td></tr>\n          <tr><td>Consultas de pediatría, precio preferencial</td><td><span class=\"ben-monto\">$423.13</span></td></tr>\n        </tbody>\n        <tbody>\n          <tr><th scope=\"rowgroup\" colspan=\"2\">Estudios externos</th></tr>\n          <tr><td>Estudios de laboratorio (no incluye patología)</td><td><span class=\"ben-monto\">30%</span></td></tr>\n          <tr><td>Estudios de rayos X</td><td><span class=\"ben-monto\">30%</span></td></tr>\n          <tr><td>Ultrasonido</td><td><span class=\"ben-monto\">30%</span></td></tr>\n          <tr><td>Tomografía sin contraste</td><td><span class=\"ben-monto\">60%</span></td></tr>\n          <tr><td>Resonancia magnética sin contraste</td><td><span class=\"ben-monto\">60%</span></td></tr>\n        </tbody>\n        <tbody>\n          <tr><th scope=\"rowgroup\" colspan=\"2\">Hospitalización</th></tr>\n          <tr><td>Descuento en hospitalización</td><td><span class=\"ben-monto\">20%</span></td></tr>\n          <tr><td>Descuento en urgencias</td><td><span class=\"ben-monto\">20%</span></td></tr>\n        </tbody>\n      </table>\n    </div>\n  </section>\n\n  <section class=\"ben-sec\">\n    <h4 class=\"ben-sec__tit ben-sec__tit--barra\">Regístrate con el QR</h4>\n    <p class=\"ben-texto\">Únicamente te pedirá:</p>\n    <ul class=\"ben-chips\">\n      <li>Nombre del hospital</li>\n      <li>Tu nombre completo</li>\n      <li>Número telefónico</li>\n      <li>Correo personal</li>\n    </ul>\n    <figure class=\"ben-fig ben-fig--qr\">\n      <img src=\"./beneficios/qr-membresia.png\" alt=\"Código QR para registrarte en la Membresía Empresarial\" width=\"330\" height=\"330\" loading=\"lazy\" decoding=\"async\">\n      <figcaption><b>Escanea el código</b>Regístrate en la Membresía Empresarial desde tu celular.</figcaption>\n    </figure>\n    <a class=\"ben-enlace\" href=\"https://adminti25.github.io/DSAI_ME/\" target=\"_blank\" rel=\"noopener noreferrer\">\n      <svg class=\"ic\" aria-hidden=\"true\"><use href=\"#i-link\"/></svg>\n      <span class=\"ben-enlace__txt\"><b>Registro en Membresía</b><span>adminti25.github.io/<wbr>DSAI_ME</span></span>\n    </a>\n  </section>\n\n  <section class=\"ben-sec\">\n    <h4 class=\"ben-sec__tit ben-sec__tit--barra\">Informes</h4>\n    <ul class=\"ben-contacto\">\n      <li><span class=\"ben-ext\"><svg class=\"ic\" aria-hidden=\"true\"><use href=\"#i-phone\"/></svg><span>Lic. Eduardo Márquez, Director de B2B · <strong>Ext. 31069</strong></span></span></li>\n    </ul>\n  </section>\n</article>",
   "orden": 2
  },
  {
   "id": 4,
   "clave": "caja",
   "titulo": "Caja de ahorro",
   "html": "<article class=\"ben-card ben-card--caja\">\n  <header class=\"ben-cab\">\n    <span class=\"ben-num\" aria-hidden=\"true\">3</span>\n    <div>\n      <h3 class=\"ben-tit\">Caja de ahorro</h3>\n      <p class=\"ben-sub\">Aplicable únicamente a personal de nómina</p>\n    </div>\n    <img class=\"ben-cab__logo\" src=\"./beneficios/logo-odessa.png\" alt=\"Odessa\" width=\"227\" height=\"59\" loading=\"lazy\" decoding=\"async\">\n  </header>\n\n  <p class=\"ben-intro\">Disponible desde tu ingreso. Regístrate en el área de <strong>Prestaciones y Beneficios</strong>.</p>\n\n  <section class=\"ben-sec\">\n    <h4 class=\"ben-sec__tit\"><span class=\"ben-sec__n\">4</span>Diferentes modalidades de ahorro</h4>\n    <ul class=\"ben-lista\">\n      <li><strong>A la vista</strong> · <span class=\"ben-monto\">6.11%</span> de rendimiento. Disponible al día siguiente.</li>\n      <li><strong>Al mes</strong> · <span class=\"ben-monto\">10.72%</span> de rendimiento. Disponible al último día hábil del mes.</li>\n      <li><strong>A diciembre</strong> · <span class=\"ben-monto\">12.86%</span> de rendimiento. Disponible los primeros 15 días de diciembre.</li>\n      <li><strong>Al retiro</strong> · <span class=\"ben-monto\">14.47%</span> de rendimiento. Disponible al final de la relación laboral.</li>\n    </ul>\n  </section>\n\n  <section class=\"ben-sec\">\n    <h4 class=\"ben-sec__tit ben-sec__tit--barra\">Para ingresar</h4>\n    <ol class=\"ben-pasos\">\n      <li>Ingresa al portal <a href=\"https://www.odessa.com.mx\" target=\"_blank\" rel=\"noopener noreferrer\">www.odessa.com.mx</a></li>\n      <li>Ten a la mano tus datos de acceso para llenar los campos requeridos.</li>\n      <li>Ahorra desde <span class=\"ben-monto\">$50</span> pesos para nómina semanal o <span class=\"ben-monto\">$100</span> pesos para nómina quincenal y elige los tipos de ahorro que desees, estableciendo una cuota para cada uno.</li>\n    </ol>\n  </section>\n\n  <section class=\"ben-sec\">\n    <h4 class=\"ben-sec__tit ben-sec__tit--barra\">Tus datos de acceso</h4>\n    <ul class=\"ben-lista\">\n      <li><strong>Número de empresa:</strong> 4769 · Operadora Coyoacán de Centros de Salud. Solicítalo a tu departamento de RH.</li>\n      <li><strong>Número de afiliado:</strong> es tu número de empleado.</li>\n      <li><strong>Clave de acceso o NIP:</strong> tu fecha de nacimiento en formato AAMMDD (año, mes y día en 2 números).</li>\n    </ul>\n    <p class=\"ben-sub\">Te recomendamos cambiar tu NIP después de ingresar.</p>\n  </section>\n\n  <section class=\"ben-sec\">\n    <h4 class=\"ben-sec__tit ben-sec__tit--barra\">¡Afíliate aquí!</h4>\n    <figure class=\"ben-fig ben-fig--qr\">\n      <img src=\"./beneficios/qr-odessa.png\" alt=\"Código QR para afiliarte a la Caja de ahorro\" width=\"270\" height=\"270\" loading=\"lazy\" decoding=\"async\">\n      <figcaption><b>Escanea el código</b>Afíliate a la Caja de ahorro desde tu celular.</figcaption>\n    </figure>\n    <a class=\"ben-enlace\" href=\"https://eqrcode.co/a/PJgn2Z\" target=\"_blank\" rel=\"noopener noreferrer\">\n      <svg class=\"ic\" aria-hidden=\"true\"><use href=\"#i-link\"/></svg>\n      <span class=\"ben-enlace__txt\"><b>Afíliate aquí</b><span>eqrcode.co/<wbr>a/<wbr>PJgn2Z</span></span>\n    </a>\n  </section>\n\n  <section class=\"ben-sec\">\n    <h4 class=\"ben-sec__tit ben-sec__tit--barra\">¿Cuánto presta la caja?</h4>\n    <div class=\"ben-scroll\">\n      <table class=\"ben-tabla ben-tabla--c\">\n        <thead>\n          <tr>\n            <th scope=\"col\">Antigüedad en empresa</th>\n            <th scope=\"col\">Sueldo bruto (meses)</th>\n            <th scope=\"col\">Plazo a pagar</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr><th scope=\"row\">6 meses a 1 año</th><td>15 días</td><td>6 meses</td></tr>\n          <tr><th scope=\"row\">1 a 3 años</th><td>1</td><td>12 meses</td></tr>\n          <tr><th scope=\"row\">3 a 5 años</th><td>2</td><td>24 meses</td></tr>\n          <tr><th scope=\"row\">Más de 5 años</th><td>3</td><td>36 meses</td></tr>\n        </tbody>\n      </table>\n    </div>\n    <p class=\"ben-sub\">Antigüedad mínima de 3 meses en tu Caja de Ahorro.</p>\n  </section>\n\n  <section class=\"ben-sec\">\n    <h4 class=\"ben-sec__tit ben-sec__tit--barra\">Registro e información</h4>\n    <ul class=\"ben-contacto\">\n      <li><span class=\"ben-ext\"><svg class=\"ic\" aria-hidden=\"true\"><use href=\"#i-phone\"/></svg><span>C.P. Yenelida Rojas · <strong>Ext. 31051</strong></span></span></li>\n    </ul>\n  </section>\n</article>",
   "orden": 3
  },
  {
   "id": 5,
   "clave": "vales",
   "titulo": "Vales de despensa",
   "html": "<article class=\"ben-card ben-card--vales\">\n  <header class=\"ben-cab\">\n    <span class=\"ben-num\" aria-hidden=\"true\">4</span>\n    <div>\n      <h3 class=\"ben-tit\">Vales de despensa</h3>\n      <p class=\"ben-sub\">Se reflejan cada mes en la primera quincena</p>\n    </div>\n  </header>\n\n  <p class=\"ben-intro\">Una vez firmado tu <strong>contrato de base</strong>, a partir de tu <strong>cuarto mes</strong> recibirás un monto de vales de despensa, el cual se ve reflejado cada mes en la <strong>primera quincena</strong>.</p>\n\n  <section class=\"ben-sec\">\n    <h4 class=\"ben-sec__tit ben-sec__tit--barra\">Aplica para</h4>\n    <ul class=\"ben-chips\">\n      <li>Colaboradores de nómina (son mensuales)</li>\n      <li>Personal sindicalizado</li>\n      <li>Personal de confianza</li>\n    </ul>\n  </section>\n\n  <section class=\"ben-sec\">\n    <h4 class=\"ben-sec__tit ben-sec__tit--barra\">Recibe tu tarjeta</h4>\n    <ol class=\"ben-pasos\">\n      <li>Cuando veas reflejado el monto de vales de despensa en tu <strong>recibo de nómina</strong>…</li>\n      <li>Acude a la <strong>oficina de nóminas</strong>.</li>\n      <li>Ahí te será entregada tu tarjeta.</li>\n    </ol>\n    <figure class=\"ben-fig\">\n      <img src=\"./beneficios/tarjeta-vales.png\" alt=\"Tarjeta de vales de despensa\" width=\"202\" height=\"320\" loading=\"lazy\" decoding=\"async\">\n      <figcaption><b>Tu tarjeta</b>Así luce la tarjeta de tus vales de despensa.</figcaption>\n    </figure>\n  </section>\n\n  <section class=\"ben-sec\">\n    <h4 class=\"ben-sec__tit ben-sec__tit--barra\">Informes</h4>\n    <ul class=\"ben-contacto\">\n      <li><span class=\"ben-ext\"><svg class=\"ic\" aria-hidden=\"true\"><use href=\"#i-phone\"/></svg><span>C.P. Alma Posadas · <strong>Ext. 31055</strong></span></span></li>\n    </ul>\n  </section>\n</article>",
   "orden": 4
  },
  {
   "id": 6,
   "clave": "intramed",
   "titulo": "Intramed Beneficios",
   "html": "<article class=\"ben-card ben-card--intramed\">\n  <header class=\"ben-cab\">\n    <span class=\"ben-num\" aria-hidden=\"true\">5</span>\n    <div>\n      <h3 class=\"ben-tit\">Intramed Beneficios</h3>\n      <p class=\"ben-sub\">App para la difusión de la comunicación institucional</p>\n    </div>\n  </header>\n\n  <figure class=\"ben-fig\">\n    <img src=\"./beneficios/logo-intramed.png\" alt=\"Logotipo de intraMed connect\" width=\"320\" height=\"95\" loading=\"lazy\" decoding=\"async\">\n    <figcaption><b>intraMed connect</b>La app para estar al día con la comunicación institucional.</figcaption>\n  </figure>\n\n  <section class=\"ben-sec\">\n    <h4 class=\"ben-sec__tit ben-sec__tit--barra\">Acércate a Capital Humano</h4>\n    <p class=\"ben-texto\">Escanea el QR y conoce tus:</p>\n    <ul class=\"ben-chips\">\n      <li>Procesos</li>\n      <li>Políticas</li>\n      <li>Lineamientos</li>\n      <li>Formularios</li>\n      <li>Programas</li>\n    </ul>\n  </section>\n</article>",
   "orden": 5
  },
  {
   "id": 7,
   "clave": "hsaic",
   "titulo": "En HSAIC tenemos para ti…",
   "html": "<article class=\"ben-card ben-card--hsaic\">\n  <header class=\"ben-cab\">\n    <span class=\"ben-num\" aria-hidden=\"true\">6</span>\n    <div>\n      <h3 class=\"ben-tit\">En HSAIC tenemos para ti…</h3>\n      <p class=\"ben-sub\">Eventos y actividades · Capacitación · Ventas especiales</p>\n    </div>\n  </header>\n\n  <div class=\"ben-trio\">\n    <section class=\"ben-sec\">\n      <h4 class=\"ben-sec__tit\"><svg class=\"ic ben-ic\" aria-hidden=\"true\"><use href=\"#i-fiesta\"/></svg>Eventos y actividades</h4>\n      <p class=\"ben-texto\">Disfruta de eventos y actividades durante todo el año que fortalecen nuestro clima laboral y fomentan nuestra cultura organizacional.</p>\n    </section>\n    <section class=\"ben-sec\">\n      <h4 class=\"ben-sec__tit\"><svg class=\"ic ben-ic\" aria-hidden=\"true\"><use href=\"#i-birrete\"/></svg>Capacitación</h4>\n      <p class=\"ben-texto\">Impulsamos tu desarrollo y aprendizaje continuo mediante programas anuales de capacitación: interna y externa.</p>\n    </section>\n    <section class=\"ben-sec\">\n      <h4 class=\"ben-sec__tit\"><svg class=\"ic ben-ic\" aria-hidden=\"true\"><use href=\"#i-carrito\"/></svg>Ventas especiales</h4>\n      <p class=\"ben-texto\">Contamos con ventas especiales y descuentos preferenciales por ser parte de HSAIC (T-FAL, Natura, Acuario Michin, Bimbo, Yakult, Turín, entre otras).</p>\n    </section>\n  </div>\n\n  <p class=\"ben-lema\">¡Estamos cerca de ti para cuidarte!</p>\n</article>",
   "orden": 6
  },
  {
   "id": 8,
   "clave": "orienta",
   "titulo": "ORIENTA®",
   "html": "<article class=\"ben-card ben-card--orienta\">\n  <header class=\"ben-cab\">\n    <span class=\"ben-num\" aria-hidden=\"true\">7</span>\n    <div>\n      <h3 class=\"ben-tit\">ORIENTA®</h3>\n      <p class=\"ben-sub\">Te orienta · Bienestar integral</p>\n    </div>\n  </header>\n\n  <p class=\"ben-intro\">Aquí empieza el bienestar integral. ¡Comencemos!</p>\n\n  <section class=\"ben-sec\">\n    <h4 class=\"ben-sec__tit ben-sec__tit--barra\">Antes de empezar</h4>\n    <ul class=\"ben-lista\">\n      <li>Recoge tu tarjeta en <strong>Capacitación y Desarrollo</strong> para activar y disfrutar los beneficios de la app ORIENTA® (aplica para colaboradores de nómina y honorarios).</li>\n      <li><strong>Extensible para 5 familiares</strong> mayores de edad.</li>\n      <li>Para ingresar solo necesitas tu <strong># de empleado</strong> y el <strong>nombre del hospital</strong> (San Ángel Inn Chapultepec).</li>\n    </ul>\n  </section>\n\n  <section class=\"ben-sec\">\n    <h4 class=\"ben-sec__tit ben-sec__tit--barra\">Activa tu cuenta y comienza a usar el servicio de ORIENTA®</h4>\n    <ol class=\"ben-pasos\">\n      <li><strong>Identifica</strong> tu número de empleado.</li>\n      <li><strong>Accede</strong> a la plataforma de registro a través del siguiente enlace.</li>\n      <li><strong>Registra</strong> los datos solicitados.</li>\n    </ol>\n    <figure class=\"ben-fig ben-fig--qr\">\n      <img src=\"./beneficios/qr-orienta.png\" alt=\"Código QR para registrarte en ORIENTA\" width=\"300\" height=\"300\" loading=\"lazy\" decoding=\"async\">\n      <figcaption><b>¡Escanéame!</b>Registra tu cuenta directo desde tu celular.</figcaption>\n    </figure>\n    <a class=\"ben-enlace\" href=\"https://app.orienta.soy/cuenta/registro?utm_source=carta_fisica&amp;utm_medium=qr&amp;utm_campaign=campa%C3%B1a_inicial_2025\" target=\"_blank\" rel=\"noopener noreferrer\">\n      <svg class=\"ic\" aria-hidden=\"true\"><use href=\"#i-link\"/></svg>\n      <span class=\"ben-enlace__txt\"><b>Registro en ORIENTA</b><span>app.orienta.soy/<wbr>cuenta/<wbr>registro</span></span>\n    </a>\n    <p class=\"ben-sub\">Listo, empieza a disfrutar de nuestra red de apoyo.</p>\n  </section>\n\n  <section class=\"ben-sec\">\n    <h4 class=\"ben-sec__tit ben-sec__tit--barra\">Descubre el bienestar integral. ¿Empezamos?</h4>\n    <p class=\"ben-sub\">Solicita tu <strong>ASESORÍA</strong>:</p>\n    <div class=\"ben-grupo\">\n      <p class=\"ben-grupo__t\"><strong>24 hrs / 365 días</strong></p>\n      <ul class=\"ben-chips\">\n        <li>Emocional</li>\n        <li>Médico</li>\n      </ul>\n    </div>\n    <div class=\"ben-grupo\">\n      <p class=\"ben-grupo__t\"><strong>9 a.m. - 9 p.m.</strong> / Lunes a Sábado</p>\n      <ul class=\"ben-chips\">\n        <li>Nutricional</li>\n        <li>Veterinario</li>\n        <li>Economía personal</li>\n        <li>Legal</li>\n      </ul>\n    </div>\n  </section>\n\n  <section class=\"ben-sec\">\n    <h4 class=\"ben-sec__tit ben-sec__tit--barra\">Esto y más es ORIENTA®</h4>\n    <ul class=\"ben-lista\">\n      <li><strong>Orientación telefónica, videoasesorías y online</strong> para ti y tu familia directa.</li>\n      <li><strong>Asesorías y orientación ilimitadas, gratuitas y confidenciales:</strong> emocionales, médicas, nutricionales, veterinarias, legales y en economía personal.</li>\n      <li><strong>Prescripción</strong> en medicina general y medicina veterinaria.</li>\n      <li><strong>Asesoría emocional presencial</strong> por objetivos (hasta 8 sesiones por caso).</li>\n      <li><strong>Acceso a webinars en vivo:</strong> especialistas en el tema brindan información de interés y resuelven tus dudas en el momento.</li>\n      <li><strong>Instructores fitness y mindfulness</strong>, cursos e-learning y plataformas digitales.</li>\n      <li><strong>Catálogo de pláticas:</strong> disfruta de diferentes pláticas abordando temas de manera eficiente.</li>\n      <li><strong>Planes nutricionales personalizados:</strong> seguimiento nutricional con expertos y recetas fáciles de realizar.</li>\n      <li><strong>Materiales impresos y digitales:</strong> tips, infografías, postales, reels, videos y más materiales llenos de información para ti.</li>\n    </ul>\n  </section>\n\n  <section class=\"ben-sec\">\n    <h4 class=\"ben-sec__tit ben-sec__tit--barra\">Para más información</h4>\n    <ul class=\"ben-contacto\">\n      <li><span class=\"ben-ext\"><svg class=\"ic\" aria-hidden=\"true\"><use href=\"#i-phone\"/></svg><span>Lic. Vianey Obregón · <strong>Ext. 31052</strong></span></span></li>\n    </ul>\n  </section>\n\n  <p class=\"ben-lema\">¡Es un servicio gratuito y confidencial para ti y tu familia!</p>\n</article>",
   "orden": 7
  },
  {
   "id": 9,
   "clave": "dental",
   "titulo": "Plan Dental",
   "html": "<article class=\"ben-card ben-card--dental\">\n  <header class=\"ben-cab\">\n    <span class=\"ben-num\" aria-hidden=\"true\">8</span>\n    <div>\n      <h3 class=\"ben-tit\">Plan Dental</h3>\n      <p class=\"ben-sub\">Para colaboradores · Grupo Hospitalario Dalinde | San Ángel Inn</p>\n    </div>\n  </header>\n\n  <p class=\"ben-intro\">Grupo Hospitalario Dalinde | San Ángel Inn te da la bienvenida a esta nueva prestación para todos nosotros. Beneficio disponible a partir de la asignación de tu número de empleado.</p>\n\n  <section class=\"ben-sec\">\n    <h4 class=\"ben-sec__tit\"><span class=\"ben-sec__n\">Gratis</span>Incluido cada año</h4>\n    <ul class=\"ben-lista ben-lista--ok\">\n      <li><strong>1</strong> Limpieza anual <strong>gratis</strong></li>\n      <li><strong>2</strong> Revisiones dentales anuales <strong>gratis</strong></li>\n      <li><strong>1</strong> Resina al año <strong>gratis</strong></li>\n      <li><strong>1</strong> Ortopantomografía anual <strong>gratis</strong></li>\n    </ul>\n  </section>\n\n  <section class=\"ben-sec\">\n    <h4 class=\"ben-sec__tit\"><span class=\"ben-sec__n\">Descuento</span>Tratamientos adicionales</h4>\n    <ul class=\"ben-lista\">\n      <li><strong>1</strong> Serie radiográfica · <span class=\"ben-monto\">50%</span> de descuento</li>\n      <li><strong>1</strong> Extracción simple · <span class=\"ben-monto\">20%</span> de descuento</li>\n      <li>Blanqueamiento · <span class=\"ben-monto\">25%</span> de descuento</li>\n      <li>Ortodoncia · <span class=\"ben-monto\">10%</span> de descuento</li>\n      <li>Endodoncia · <span class=\"ben-monto\">20%</span> de descuento</li>\n      <li>Extracciones quirúrgicas · <span class=\"ben-monto\">20%</span> de descuento</li>\n      <li>Resinas adicionales · <span class=\"ben-monto\">20%</span> de descuento</li>\n      <li>Periodoncia · <span class=\"ben-monto\">20%</span> de descuento</li>\n    </ul>\n  </section>\n\n  <section class=\"ben-sec\">\n    <h4 class=\"ben-sec__tit ben-sec__tit--barra\">Especialidades</h4>\n    <ul class=\"ben-chips\">\n      <li>Operatoria dental</li>\n      <li>Endodoncia</li>\n      <li>Cirugía maxilofacial</li>\n      <li>Periodoncia</li>\n      <li>Odontopediatría</li>\n      <li>Rehabilitación (prótesis)</li>\n    </ul>\n  </section>\n\n  <section class=\"ben-sec\">\n    <h4 class=\"ben-sec__tit ben-sec__tit--barra\">Agenda tu cita</h4>\n    <div class=\"ben-sedes\">\n      <div class=\"ben-sede\">\n        <p class=\"ben-sede__n\">San Ángel Inn · Ágora del Valle</p>\n        <ul class=\"ben-contacto\">\n          <li><a href=\"https://wa.me/525657032630\" target=\"_blank\" rel=\"noopener noreferrer\"><svg class=\"ic\" aria-hidden=\"true\"><use href=\"#i-chat\"/></svg>WhatsApp 56 5703 2630</a></li>\n        </ul>\n        <p class=\"ben-sede__h\">Lunes a sábado · 9 a 20 hrs</p>\n      </div>\n      <div class=\"ben-sede\">\n        <p class=\"ben-sede__n\">San Ángel Inn · HMG</p>\n        <ul class=\"ben-contacto\">\n          <li><a href=\"https://wa.me/525643388460\" target=\"_blank\" rel=\"noopener noreferrer\"><svg class=\"ic\" aria-hidden=\"true\"><use href=\"#i-chat\"/></svg>WhatsApp 56 4338 8460</a></li>\n        </ul>\n        <p class=\"ben-sede__h\">Lunes a sábado · 9 a 20 hrs</p>\n      </div>\n      <div class=\"ben-sede\">\n        <p class=\"ben-sede__n\">San Ángel Inn · Satélite</p>\n        <ul class=\"ben-contacto\">\n          <li><a href=\"https://wa.me/527702061852\" target=\"_blank\" rel=\"noopener noreferrer\"><svg class=\"ic\" aria-hidden=\"true\"><use href=\"#i-chat\"/></svg>WhatsApp 77 0206 1852</a></li>\n        </ul>\n        <p class=\"ben-sede__h\">Lunes a sábado · 9 a 20 hrs</p>\n      </div>\n    </div>\n  </section>\n</article>",
   "orden": 8
  },
  {
   "id": 10,
   "clave": "vida",
   "titulo": "Seguro de Vida HSAIC",
   "html": "<article class=\"ben-card ben-card--vida\">\n  <header class=\"ben-cab\">\n    <span class=\"ben-num\" aria-hidden=\"true\">9</span>\n    <div>\n      <h3 class=\"ben-tit\">Seguro de Vida HSAIC</h3>\n      <p class=\"ben-sub\">Insignia Life · El seguro de tu vida</p>\n    </div>\n  </header>\n\n  <p class=\"ben-intro\">Como parte de las prestaciones institucionales, todos los colaboradores cuentan con una <strong>Póliza de Seguro de Vida HSAIC</strong>, otorgada a través de <strong>Insignia Life</strong> desde su ingreso a la empresa.</p>\n\n  <section class=\"ben-sec\">\n    <h4 class=\"ben-sec__tit ben-sec__tit--barra\">Monto de cobertura</h4>\n    <ul class=\"ben-lista\">\n      <li>Suma asegurada de <span class=\"ben-monto\">$200,000 MXN</span></li>\n    </ul>\n  </section>\n\n  <section class=\"ben-sec\">\n    <h4 class=\"ben-sec__tit ben-sec__tit--barra\">Lo que debes saber</h4>\n    <ul class=\"ben-lista ben-lista--ok\">\n      <li>Aplica para <strong>personal de nómina</strong> (sindicalizados y confianza).</li>\n      <li>Puedes designar hasta <strong>4 beneficiarios directos</strong>, todos mayores de edad.</li>\n      <li><strong>Reclutamiento</strong> te entregará una copia de tu póliza. ¡Consérvala y mantenla en buen estado!</li>\n    </ul>\n  </section>\n\n  <section class=\"ben-sec\">\n    <h4 class=\"ben-sec__tit ben-sec__tit--barra\">Informes</h4>\n    <p class=\"ben-texto\">Para cualquier duda o información, puedes comunicarte con:</p>\n    <ul class=\"ben-contacto\">\n      <li><span class=\"ben-ext\"><svg class=\"ic\" aria-hidden=\"true\"><use href=\"#i-phone\"/></svg><span>Lic. Rocío Rojas, Coordinadora de Reclutamiento y Selección · <strong>Ext. 31049</strong></span></span></li>\n      <li><span class=\"ben-ext\"><svg class=\"ic\" aria-hidden=\"true\"><use href=\"#i-phone\"/></svg><span>Lic. Laila Díaz, Analista de Reclutamiento y Selección · <strong>Ext. 31050</strong></span></span></li>\n    </ul>\n  </section>\n</article>",
   "orden": 9
  }
 ]
};
  const original = window.fetch ? window.fetch.bind(window) : null;
  window.fetch = (entrada, opciones) => {
    const url = typeof entrada === 'string' ? entrada : (entrada && entrada.url) || '';
    const m = /^\/?(?:\.\/)?api\/([a-z]+)\/?$/.exec(url.split('?')[0]);
    if (m && Object.prototype.hasOwnProperty.call(DATOS, m[1])) {
      return Promise.resolve(new Response(JSON.stringify(DATOS[m[1]]), { status: 200, headers: { 'Content-Type': 'application/json' } }));
    }
    return original ? original(entrada, opciones) : Promise.reject(new TypeError('fetch no disponible'));
  };
})();
