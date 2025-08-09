/* src/App.tsx */
<IonTabBar slot="bottom">
  <IonTabButton tab="chats" href="/tab1">
    <IonIcon icon={chatbubble} />
    <IonLabel>Conversas</IonLabel>
  </IonTabButton>

  <IonTabButton tab="calls" href="/tab2">
    <IonIcon icon={call} />
    <IonLabel>Chamadas</IonLabel>
  </IonTabButton>

  <IonTabButton tab="contacts" href="/tab3">
    <IonIcon icon={people} />
    <IonLabel>Contatos</IonLabel>
  </IonTabButton>

  <IonTabButton tab="settings" href="/settings">
    <IonIcon icon={settings} />
    <IonLabel>Configurações</IonLabel>
  </IonTabButton>
</IonTabBar>
