﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.O
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Персонал.
    /// </summary>
    // *** Start programmer edit section *** (Персонал CustomAttributes)

    // *** End programmer edit section *** (Персонал CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ПерсоналE", new string[] {
            "ФИО as \'ФИО\'"})]
    [View("ПерсоналL", new string[] {
            "ФИО as \'ФИО\'",
            "Телефон"})]
    public class Персонал : ICSSoft.STORMNET.DataObject
    {
        
        private string fФИО;
        
        private int fТелефон;
        
        private IIS.O.Должности fДолжности;
        
        // *** Start programmer edit section *** (Персонал CustomMembers)

        // *** End programmer edit section *** (Персонал CustomMembers)

        
        /// <summary>
        /// Телефон.
        /// </summary>
        // *** Start programmer edit section *** (Персонал.Телефон CustomAttributes)

        // *** End programmer edit section *** (Персонал.Телефон CustomAttributes)
        public virtual int Телефон
        {
            get
            {
                // *** Start programmer edit section *** (Персонал.Телефон Get start)

                // *** End programmer edit section *** (Персонал.Телефон Get start)
                int result = this.fТелефон;
                // *** Start programmer edit section *** (Персонал.Телефон Get end)

                // *** End programmer edit section *** (Персонал.Телефон Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Персонал.Телефон Set start)

                // *** End programmer edit section *** (Персонал.Телефон Set start)
                this.fТелефон = value;
                // *** Start programmer edit section *** (Персонал.Телефон Set end)

                // *** End programmer edit section *** (Персонал.Телефон Set end)
            }
        }
        
        /// <summary>
        /// ФИО.
        /// </summary>
        // *** Start programmer edit section *** (Персонал.ФИО CustomAttributes)

        // *** End programmer edit section *** (Персонал.ФИО CustomAttributes)
        [StrLen(255)]
        public virtual string ФИО
        {
            get
            {
                // *** Start programmer edit section *** (Персонал.ФИО Get start)

                // *** End programmer edit section *** (Персонал.ФИО Get start)
                string result = this.fФИО;
                // *** Start programmer edit section *** (Персонал.ФИО Get end)

                // *** End programmer edit section *** (Персонал.ФИО Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Персонал.ФИО Set start)

                // *** End programmer edit section *** (Персонал.ФИО Set start)
                this.fФИО = value;
                // *** Start programmer edit section *** (Персонал.ФИО Set end)

                // *** End programmer edit section *** (Персонал.ФИО Set end)
            }
        }
        
        /// <summary>
        /// Персонал.
        /// </summary>
        // *** Start programmer edit section *** (Персонал.Должности CustomAttributes)

        // *** End programmer edit section *** (Персонал.Должности CustomAttributes)
        [PropertyStorage(new string[] {
                "Должности"})]
        [NotNull()]
        public virtual IIS.O.Должности Должности
        {
            get
            {
                // *** Start programmer edit section *** (Персонал.Должности Get start)

                // *** End programmer edit section *** (Персонал.Должности Get start)
                IIS.O.Должности result = this.fДолжности;
                // *** Start programmer edit section *** (Персонал.Должности Get end)

                // *** End programmer edit section *** (Персонал.Должности Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Персонал.Должности Set start)

                // *** End programmer edit section *** (Персонал.Должности Set start)
                this.fДолжности = value;
                // *** Start programmer edit section *** (Персонал.Должности Set end)

                // *** End programmer edit section *** (Персонал.Должности Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ПерсоналE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПерсоналE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПерсоналE", typeof(IIS.O.Персонал));
                }
            }
            
            /// <summary>
            /// "ПерсоналL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПерсоналL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПерсоналL", typeof(IIS.O.Персонал));
                }
            }
        }
    }
}
